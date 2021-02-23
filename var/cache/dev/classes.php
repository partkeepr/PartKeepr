<?php 
namespace Symfony\Component\HttpFoundation\Session\Storage
{
use Symfony\Component\HttpFoundation\Session\Storage\Handler\NativeSessionHandler;
use Symfony\Component\HttpFoundation\Session\Storage\Proxy\AbstractProxy;
class PhpBridgeSessionStorage extends NativeSessionStorage
{
public function __construct($handler = null, MetadataBag $metaBag = null)
{
$this->setMetadataBag($metaBag);
$this->setSaveHandler($handler);
}
public function start()
{
if ($this->started) {
return true;
}
$this->loadSession();
if (!$this->saveHandler->isWrapper() && !$this->saveHandler->isSessionHandlerInterface()) {
$this->saveHandler->setActive(true);
}
return true;
}
public function clear()
{
foreach ($this->bags as $bag) {
$bag->clear();
}
$this->loadSession();
}
}
}
namespace Symfony\Bundle\FrameworkBundle\Templating
{
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Security\Core\SecurityContext;
class GlobalVariables
{
protected $container;
public function __construct(ContainerInterface $container)
{
$this->container = $container;
}
public function getSecurity()
{
@trigger_error('The '.__METHOD__.' method is deprecated since Symfony 2.6 and will be removed in 3.0.', E_USER_DEPRECATED);
if ($this->container->has('security.context')) {
return $this->container->get('security.context');
}
}
public function getUser()
{
if (!$this->container->has('security.token_storage')) {
return;
}
$tokenStorage = $this->container->get('security.token_storage');
if (!$token = $tokenStorage->getToken()) {
return;
}
$user = $token->getUser();
if (!\is_object($user)) {
return;
}
return $user;
}
public function getRequest()
{
if ($this->container->has('request_stack')) {
return $this->container->get('request_stack')->getCurrentRequest();
}
}
public function getSession()
{
if ($request = $this->getRequest()) {
return $request->getSession();
}
}
public function getEnvironment()
{
return $this->container->getParameter('kernel.environment');
}
public function getDebug()
{
return (bool) $this->container->getParameter('kernel.debug');
}
}
}
namespace Symfony\Component\Routing\Generator
{
interface ConfigurableRequirementsInterface
{
public function setStrictRequirements($enabled);
public function isStrictRequirements();
}
}
namespace Symfony\Component\Routing\Generator
{
use Psr\Log\LoggerInterface;
use Symfony\Component\Routing\Exception\InvalidParameterException;
use Symfony\Component\Routing\Exception\MissingMandatoryParametersException;
use Symfony\Component\Routing\Exception\RouteNotFoundException;
use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\RouteCollection;
class UrlGenerator implements UrlGeneratorInterface, ConfigurableRequirementsInterface
{
protected $routes;
protected $context;
protected $strictRequirements = true;
protected $logger;
protected $decodedChars = array('%2F'=>'/','%40'=>'@','%3A'=>':','%3B'=>';','%2C'=>',','%3D'=>'=','%2B'=>'+','%21'=>'!','%2A'=>'*','%7C'=>'|',
);
public function __construct(RouteCollection $routes, RequestContext $context, LoggerInterface $logger = null)
{
$this->routes = $routes;
$this->context = $context;
$this->logger = $logger;
}
public function setContext(RequestContext $context)
{
$this->context = $context;
}
public function getContext()
{
return $this->context;
}
public function setStrictRequirements($enabled)
{
$this->strictRequirements = null === $enabled ? null : (bool) $enabled;
}
public function isStrictRequirements()
{
return $this->strictRequirements;
}
public function generate($name, $parameters = array(), $referenceType = self::ABSOLUTE_PATH)
{
if (null === $route = $this->routes->get($name)) {
throw new RouteNotFoundException(sprintf('Unable to generate a URL for the named route "%s" as such route does not exist.', $name));
}
$compiledRoute = $route->compile();
return $this->doGenerate($compiledRoute->getVariables(), $route->getDefaults(), $route->getRequirements(), $compiledRoute->getTokens(), $parameters, $name, $referenceType, $compiledRoute->getHostTokens(), $route->getSchemes());
}
protected function doGenerate($variables, $defaults, $requirements, $tokens, $parameters, $name, $referenceType, $hostTokens, array $requiredSchemes = array())
{
if (\is_bool($referenceType) || \is_string($referenceType)) {
@trigger_error('The hardcoded value you are using for the $referenceType argument of the '.__CLASS__.'::generate method is deprecated since Symfony 2.8 and will not be supported anymore in 3.0. Use the constants defined in the UrlGeneratorInterface instead.', E_USER_DEPRECATED);
if (true === $referenceType) {
$referenceType = self::ABSOLUTE_URL;
} elseif (false === $referenceType) {
$referenceType = self::ABSOLUTE_PATH;
} elseif ('relative'=== $referenceType) {
$referenceType = self::RELATIVE_PATH;
} elseif ('network'=== $referenceType) {
$referenceType = self::NETWORK_PATH;
}
}
$variables = array_flip($variables);
$mergedParams = array_replace($defaults, $this->context->getParameters(), $parameters);
if ($diff = array_diff_key($variables, $mergedParams)) {
throw new MissingMandatoryParametersException(sprintf('Some mandatory parameters are missing ("%s") to generate a URL for route "%s".', implode('", "', array_keys($diff)), $name));
}
$url ='';
$optional = true;
foreach ($tokens as $token) {
if ('variable'=== $token[0]) {
if (!$optional || !array_key_exists($token[3], $defaults) || null !== $mergedParams[$token[3]] && (string) $mergedParams[$token[3]] !== (string) $defaults[$token[3]]) {
if (null !== $this->strictRequirements && !preg_match('#^'.$token[2].'$#', $mergedParams[$token[3]])) {
$message = sprintf('Parameter "%s" for route "%s" must match "%s" ("%s" given) to generate a corresponding URL.', $token[3], $name, $token[2], $mergedParams[$token[3]]);
if ($this->strictRequirements) {
throw new InvalidParameterException($message);
}
if ($this->logger) {
$this->logger->error($message);
}
return;
}
$url = $token[1].$mergedParams[$token[3]].$url;
$optional = false;
}
} else {
$url = $token[1].$url;
$optional = false;
}
}
if (''=== $url) {
$url ='/';
}
$url = strtr(rawurlencode($url), $this->decodedChars);
$url = strtr($url, array('/../'=>'/%2E%2E/','/./'=>'/%2E/'));
if ('/..'=== substr($url, -3)) {
$url = substr($url, 0, -2).'%2E%2E';
} elseif ('/.'=== substr($url, -2)) {
$url = substr($url, 0, -1).'%2E';
}
$schemeAuthority ='';
$host = $this->context->getHost();
$scheme = $this->context->getScheme();
if ($requiredSchemes) {
if (!\in_array($scheme, $requiredSchemes, true)) {
$referenceType = self::ABSOLUTE_URL;
$scheme = current($requiredSchemes);
}
} elseif (isset($requirements['_scheme']) && ($req = strtolower($requirements['_scheme'])) && $scheme !== $req) {
$referenceType = self::ABSOLUTE_URL;
$scheme = $req;
}
if ($hostTokens) {
$routeHost ='';
foreach ($hostTokens as $token) {
if ('variable'=== $token[0]) {
if (null !== $this->strictRequirements && !preg_match('#^'.$token[2].'$#i', $mergedParams[$token[3]])) {
$message = sprintf('Parameter "%s" for route "%s" must match "%s" ("%s" given) to generate a corresponding URL.', $token[3], $name, $token[2], $mergedParams[$token[3]]);
if ($this->strictRequirements) {
throw new InvalidParameterException($message);
}
if ($this->logger) {
$this->logger->error($message);
}
return;
}
$routeHost = $token[1].$mergedParams[$token[3]].$routeHost;
} else {
$routeHost = $token[1].$routeHost;
}
}
if ($routeHost !== $host) {
$host = $routeHost;
if (self::ABSOLUTE_URL !== $referenceType) {
$referenceType = self::NETWORK_PATH;
}
}
}
if ((self::ABSOLUTE_URL === $referenceType || self::NETWORK_PATH === $referenceType) && !empty($host)) {
$port ='';
if ('http'=== $scheme && 80 != $this->context->getHttpPort()) {
$port =':'.$this->context->getHttpPort();
} elseif ('https'=== $scheme && 443 != $this->context->getHttpsPort()) {
$port =':'.$this->context->getHttpsPort();
}
$schemeAuthority = self::NETWORK_PATH === $referenceType ?'//': "$scheme://";
$schemeAuthority .= $host.$port;
}
if (self::RELATIVE_PATH === $referenceType) {
$url = self::getRelativePath($this->context->getPathInfo(), $url);
} else {
$url = $schemeAuthority.$this->context->getBaseUrl().$url;
}
$extra = array_udiff_assoc(array_diff_key($parameters, $variables), $defaults, function ($a, $b) {
return $a == $b ? 0 : 1;
});
if ($extra && $query = http_build_query($extra,'','&')) {
$url .='?'.strtr($query, array('%2F'=>'/'));
}
return $url;
}
public static function getRelativePath($basePath, $targetPath)
{
if ($basePath === $targetPath) {
return'';
}
$sourceDirs = explode('/', isset($basePath[0]) &&'/'=== $basePath[0] ? substr($basePath, 1) : $basePath);
$targetDirs = explode('/', isset($targetPath[0]) &&'/'=== $targetPath[0] ? substr($targetPath, 1) : $targetPath);
array_pop($sourceDirs);
$targetFile = array_pop($targetDirs);
foreach ($sourceDirs as $i => $dir) {
if (isset($targetDirs[$i]) && $dir === $targetDirs[$i]) {
unset($sourceDirs[$i], $targetDirs[$i]);
} else {
break;
}
}
$targetDirs[] = $targetFile;
$path = str_repeat('../', \count($sourceDirs)).implode('/', $targetDirs);
return''=== $path ||'/'=== $path[0]
|| false !== ($colonPos = strpos($path,':')) && ($colonPos < ($slashPos = strpos($path,'/')) || false === $slashPos)
? "./$path" : $path;
}
}
}
namespace Symfony\Component\Routing\Matcher
{
interface RedirectableUrlMatcherInterface
{
public function redirect($path, $route, $scheme = null);
}
}
namespace Symfony\Component\Routing\Matcher
{
use Symfony\Component\ExpressionLanguage\ExpressionFunctionProviderInterface;
use Symfony\Component\ExpressionLanguage\ExpressionLanguage;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Exception\MethodNotAllowedException;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouteCollection;
class UrlMatcher implements UrlMatcherInterface, RequestMatcherInterface
{
const REQUIREMENT_MATCH = 0;
const REQUIREMENT_MISMATCH = 1;
const ROUTE_MATCH = 2;
protected $context;
protected $allow = array();
protected $routes;
protected $request;
protected $expressionLanguage;
protected $expressionLanguageProviders = array();
public function __construct(RouteCollection $routes, RequestContext $context)
{
$this->routes = $routes;
$this->context = $context;
}
public function setContext(RequestContext $context)
{
$this->context = $context;
}
public function getContext()
{
return $this->context;
}
public function match($pathinfo)
{
$this->allow = array();
if ($ret = $this->matchCollection(rawurldecode($pathinfo), $this->routes)) {
return $ret;
}
throw 0 < \count($this->allow)
? new MethodNotAllowedException(array_unique($this->allow))
: new ResourceNotFoundException(sprintf('No routes found for "%s".', $pathinfo));
}
public function matchRequest(Request $request)
{
$this->request = $request;
$ret = $this->match($request->getPathInfo());
$this->request = null;
return $ret;
}
public function addExpressionLanguageProvider(ExpressionFunctionProviderInterface $provider)
{
$this->expressionLanguageProviders[] = $provider;
}
protected function matchCollection($pathinfo, RouteCollection $routes)
{
foreach ($routes as $name => $route) {
$compiledRoute = $route->compile();
if (''!== $compiledRoute->getStaticPrefix() && 0 !== strpos($pathinfo, $compiledRoute->getStaticPrefix())) {
continue;
}
if (!preg_match($compiledRoute->getRegex(), $pathinfo, $matches)) {
continue;
}
$hostMatches = array();
if ($compiledRoute->getHostRegex() && !preg_match($compiledRoute->getHostRegex(), $this->context->getHost(), $hostMatches)) {
continue;
}
$status = $this->handleRouteRequirements($pathinfo, $name, $route);
if (self::REQUIREMENT_MISMATCH === $status[0]) {
continue;
}
if ($requiredMethods = $route->getMethods()) {
if ('HEAD'=== $method = $this->context->getMethod()) {
$method ='GET';
}
if (!\in_array($method, $requiredMethods)) {
if (self::REQUIREMENT_MATCH === $status[0]) {
$this->allow = array_merge($this->allow, $requiredMethods);
}
continue;
}
}
if (self::ROUTE_MATCH === $status[0]) {
return $status[1];
}
return $this->getAttributes($route, $name, array_replace($matches, $hostMatches));
}
}
protected function getAttributes(Route $route, $name, array $attributes)
{
$attributes['_route'] = $name;
return $this->mergeDefaults($attributes, $route->getDefaults());
}
protected function handleRouteRequirements($pathinfo, $name, Route $route)
{
if ($route->getCondition() && !$this->getExpressionLanguage()->evaluate($route->getCondition(), array('context'=> $this->context,'request'=> $this->request ?: $this->createRequest($pathinfo)))) {
return array(self::REQUIREMENT_MISMATCH, null);
}
$scheme = $this->context->getScheme();
$status = $route->getSchemes() && !$route->hasScheme($scheme) ? self::REQUIREMENT_MISMATCH : self::REQUIREMENT_MATCH;
return array($status, null);
}
protected function mergeDefaults($params, $defaults)
{
foreach ($params as $key => $value) {
if (!\is_int($key)) {
$defaults[$key] = $value;
}
}
return $defaults;
}
protected function getExpressionLanguage()
{
if (null === $this->expressionLanguage) {
if (!class_exists('Symfony\Component\ExpressionLanguage\ExpressionLanguage')) {
throw new \RuntimeException('Unable to use expressions as the Symfony ExpressionLanguage component is not installed.');
}
$this->expressionLanguage = new ExpressionLanguage(null, $this->expressionLanguageProviders);
}
return $this->expressionLanguage;
}
protected function createRequest($pathinfo)
{
if (!class_exists('Symfony\Component\HttpFoundation\Request')) {
return null;
}
return Request::create($this->context->getScheme().'://'.$this->context->getHost().$this->context->getBaseUrl().$pathinfo, $this->context->getMethod(), $this->context->getParameters(), array(), array(), array('SCRIPT_FILENAME'=> $this->context->getBaseUrl(),'SCRIPT_NAME'=> $this->context->getBaseUrl(),
));
}
}
}
namespace Symfony\Component\Routing\Matcher
{
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\Routing\Route;
abstract class RedirectableUrlMatcher extends UrlMatcher implements RedirectableUrlMatcherInterface
{
public function match($pathinfo)
{
try {
$parameters = parent::match($pathinfo);
} catch (ResourceNotFoundException $e) {
if ('/'=== substr($pathinfo, -1) || !\in_array($this->context->getMethod(), array('HEAD','GET'))) {
throw $e;
}
try {
parent::match($pathinfo.'/');
return $this->redirect($pathinfo.'/', null);
} catch (ResourceNotFoundException $e2) {
throw $e;
}
}
return $parameters;
}
protected function handleRouteRequirements($pathinfo, $name, Route $route)
{
if ($route->getCondition() && !$this->getExpressionLanguage()->evaluate($route->getCondition(), array('context'=> $this->context,'request'=> $this->request ?: $this->createRequest($pathinfo)))) {
return array(self::REQUIREMENT_MISMATCH, null);
}
$scheme = $this->context->getScheme();
$schemes = $route->getSchemes();
if ($schemes && !$route->hasScheme($scheme)) {
return array(self::ROUTE_MATCH, $this->redirect($pathinfo, $name, current($schemes)));
}
return array(self::REQUIREMENT_MATCH, null);
}
}
}
namespace Symfony\Bundle\FrameworkBundle\Routing
{
use Symfony\Component\Routing\Matcher\RedirectableUrlMatcher as BaseMatcher;
class RedirectableUrlMatcher extends BaseMatcher
{
public function redirect($path, $route, $scheme = null)
{
return array('_controller'=>'Symfony\\Bundle\\FrameworkBundle\\Controller\\RedirectController::urlRedirectAction','path'=> $path,'permanent'=> true,'scheme'=> $scheme,'httpPort'=> $this->context->getHttpPort(),'httpsPort'=> $this->context->getHttpsPort(),'_route'=> $route,
);
}
}
}
namespace Symfony\Component\HttpKernel\Controller
{
use Symfony\Component\HttpFoundation\Request;
interface ControllerResolverInterface
{
public function getController(Request $request);
public function getArguments(Request $request, $controller);
}
}
namespace Symfony\Component\HttpKernel\Controller
{
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\Request;
class ControllerResolver implements ControllerResolverInterface
{
private $logger;
private $supportsVariadic;
private $supportsScalarTypes;
public function __construct(LoggerInterface $logger = null)
{
$this->logger = $logger;
$this->supportsVariadic = method_exists('ReflectionParameter','isVariadic');
$this->supportsScalarTypes = method_exists('ReflectionParameter','getType');
}
public function getController(Request $request)
{
if (!$controller = $request->attributes->get('_controller')) {
if (null !== $this->logger) {
$this->logger->warning('Unable to look for the controller as the "_controller" parameter is missing.');
}
return false;
}
if (\is_array($controller)) {
return $controller;
}
if (\is_object($controller)) {
if (method_exists($controller,'__invoke')) {
return $controller;
}
throw new \InvalidArgumentException(sprintf('Controller "%s" for URI "%s" is not callable.', \get_class($controller), $request->getPathInfo()));
}
if (false === strpos($controller,':')) {
if (method_exists($controller,'__invoke')) {
return $this->instantiateController($controller);
} elseif (\function_exists($controller)) {
return $controller;
}
}
$callable = $this->createController($controller);
if (!\is_callable($callable)) {
throw new \InvalidArgumentException(sprintf('Controller "%s" for URI "%s" is not callable.', $controller, $request->getPathInfo()));
}
return $callable;
}
public function getArguments(Request $request, $controller)
{
if (\is_array($controller)) {
$r = new \ReflectionMethod($controller[0], $controller[1]);
} elseif (\is_object($controller) && !$controller instanceof \Closure) {
$r = new \ReflectionObject($controller);
$r = $r->getMethod('__invoke');
} else {
$r = new \ReflectionFunction($controller);
}
return $this->doGetArguments($request, $controller, $r->getParameters());
}
protected function doGetArguments(Request $request, $controller, array $parameters)
{
$attributes = $request->attributes->all();
$arguments = array();
foreach ($parameters as $param) {
if (array_key_exists($param->name, $attributes)) {
if ($this->supportsVariadic && $param->isVariadic() && \is_array($attributes[$param->name])) {
$arguments = array_merge($arguments, array_values($attributes[$param->name]));
} else {
$arguments[] = $attributes[$param->name];
}
} elseif ($param->getClass() && $param->getClass()->isInstance($request)) {
$arguments[] = $request;
} elseif ($param->isDefaultValueAvailable()) {
$arguments[] = $param->getDefaultValue();
} elseif ($this->supportsScalarTypes && $param->hasType() && $param->allowsNull()) {
$arguments[] = null;
} else {
if (\is_array($controller)) {
$repr = sprintf('%s::%s()', \get_class($controller[0]), $controller[1]);
} elseif (\is_object($controller)) {
$repr = \get_class($controller);
} else {
$repr = $controller;
}
throw new \RuntimeException(sprintf('Controller "%s" requires that you provide a value for the "$%s" argument (because there is no default value or because there is a non optional argument after this one).', $repr, $param->name));
}
}
return $arguments;
}
protected function createController($controller)
{
if (false === strpos($controller,'::')) {
throw new \InvalidArgumentException(sprintf('Unable to find controller "%s".', $controller));
}
list($class, $method) = explode('::', $controller, 2);
if (!class_exists($class)) {
throw new \InvalidArgumentException(sprintf('Class "%s" does not exist.', $class));
}
return array($this->instantiateController($class), $method);
}
protected function instantiateController($class)
{
return new $class();
}
}
}
namespace Symfony\Component\HttpKernel\Event
{
use Symfony\Component\EventDispatcher\Event;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\HttpKernelInterface;
class KernelEvent extends Event
{
private $kernel;
private $request;
private $requestType;
public function __construct(HttpKernelInterface $kernel, Request $request, $requestType)
{
$this->kernel = $kernel;
$this->request = $request;
$this->requestType = $requestType;
}
public function getKernel()
{
return $this->kernel;
}
public function getRequest()
{
return $this->request;
}
public function getRequestType()
{
return $this->requestType;
}
public function isMasterRequest()
{
return HttpKernelInterface::MASTER_REQUEST === $this->requestType;
}
}
}
namespace Symfony\Component\HttpKernel\Event
{
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\HttpKernelInterface;
class FilterControllerEvent extends KernelEvent
{
private $controller;
public function __construct(HttpKernelInterface $kernel, $controller, Request $request, $requestType)
{
parent::__construct($kernel, $request, $requestType);
$this->setController($controller);
}
public function getController()
{
return $this->controller;
}
public function setController($controller)
{
if (!\is_callable($controller)) {
throw new \LogicException(sprintf('The controller must be a callable (%s given).', $this->varToString($controller)));
}
$this->controller = $controller;
}
private function varToString($var)
{
if (\is_object($var)) {
return sprintf('Object(%s)', \get_class($var));
}
if (\is_array($var)) {
$a = array();
foreach ($var as $k => $v) {
$a[] = sprintf('%s => %s', $k, $this->varToString($v));
}
return sprintf('Array(%s)', implode(', ', $a));
}
if (\is_resource($var)) {
return sprintf('Resource(%s)', get_resource_type($var));
}
if (null === $var) {
return'null';
}
if (false === $var) {
return'false';
}
if (true === $var) {
return'true';
}
return (string) $var;
}
}
}
namespace Symfony\Component\HttpKernel\Event
{
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\HttpKernelInterface;
class FilterResponseEvent extends KernelEvent
{
private $response;
public function __construct(HttpKernelInterface $kernel, Request $request, $requestType, Response $response)
{
parent::__construct($kernel, $request, $requestType);
$this->setResponse($response);
}
public function getResponse()
{
return $this->response;
}
public function setResponse(Response $response)
{
$this->response = $response;
}
}
}
namespace Symfony\Component\HttpKernel\Event
{
use Symfony\Component\HttpFoundation\Response;
class GetResponseEvent extends KernelEvent
{
private $response;
public function getResponse()
{
return $this->response;
}
public function setResponse(Response $response)
{
$this->response = $response;
$this->stopPropagation();
}
public function hasResponse()
{
return null !== $this->response;
}
}
}
namespace Symfony\Component\HttpKernel\Event
{
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\HttpKernelInterface;
class GetResponseForControllerResultEvent extends GetResponseEvent
{
private $controllerResult;
public function __construct(HttpKernelInterface $kernel, Request $request, $requestType, $controllerResult)
{
parent::__construct($kernel, $request, $requestType);
$this->controllerResult = $controllerResult;
}
public function getControllerResult()
{
return $this->controllerResult;
}
public function setControllerResult($controllerResult)
{
$this->controllerResult = $controllerResult;
}
}
}
namespace Symfony\Component\HttpKernel\Event
{
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\HttpKernelInterface;
class GetResponseForExceptionEvent extends GetResponseEvent
{
private $exception;
public function __construct(HttpKernelInterface $kernel, Request $request, $requestType, \Exception $e)
{
parent::__construct($kernel, $request, $requestType);
$this->setException($e);
}
public function getException()
{
return $this->exception;
}
public function setException(\Exception $exception)
{
$this->exception = $exception;
}
}
}
namespace Symfony\Bundle\FrameworkBundle\Controller
{
use Symfony\Component\HttpKernel\KernelInterface;
class ControllerNameParser
{
protected $kernel;
public function __construct(KernelInterface $kernel)
{
$this->kernel = $kernel;
}
public function parse($controller)
{
$parts = explode(':', $controller);
if (3 !== \count($parts) || \in_array('', $parts, true)) {
throw new \InvalidArgumentException(sprintf('The "%s" controller is not a valid "a:b:c" controller string.', $controller));
}
$originalController = $controller;
list($bundle, $controller, $action) = $parts;
$controller = str_replace('/','\\', $controller);
$bundles = array();
try {
$allBundles = $this->kernel->getBundle($bundle, false);
} catch (\InvalidArgumentException $e) {
$message = sprintf('The "%s" (from the _controller value "%s") does not exist or is not enabled in your kernel!',
$bundle,
$originalController
);
if ($alternative = $this->findAlternative($bundle)) {
$message .= sprintf(' Did you mean "%s:%s:%s"?', $alternative, $controller, $action);
}
throw new \InvalidArgumentException($message, 0, $e);
}
foreach ($allBundles as $b) {
$try = $b->getNamespace().'\\Controller\\'.$controller.'Controller';
if (class_exists($try)) {
return $try.'::'.$action.'Action';
}
$bundles[] = $b->getName();
$msg = sprintf('The _controller value "%s:%s:%s" maps to a "%s" class, but this class was not found. Create this class or check the spelling of the class and its namespace.', $bundle, $controller, $action, $try);
}
if (\count($bundles) > 1) {
$msg = sprintf('Unable to find controller "%s:%s" in bundles %s.', $bundle, $controller, implode(', ', $bundles));
}
throw new \InvalidArgumentException($msg);
}
public function build($controller)
{
if (0 === preg_match('#^(.*?\\\\Controller\\\\(.+)Controller)::(.+)Action$#', $controller, $match)) {
throw new \InvalidArgumentException(sprintf('The "%s" controller is not a valid "class::method" string.', $controller));
}
$className = $match[1];
$controllerName = $match[2];
$actionName = $match[3];
foreach ($this->kernel->getBundles() as $name => $bundle) {
if (0 !== strpos($className, $bundle->getNamespace())) {
continue;
}
return sprintf('%s:%s:%s', $name, $controllerName, $actionName);
}
throw new \InvalidArgumentException(sprintf('Unable to find a bundle that defines controller "%s".', $controller));
}
private function findAlternative($nonExistentBundleName)
{
$bundleNames = array_map(function ($b) {
return $b->getName();
}, $this->kernel->getBundles());
$alternative = null;
$shortest = null;
foreach ($bundleNames as $bundleName) {
if (false !== strpos($bundleName, $nonExistentBundleName)) {
return $bundleName;
}
$lev = levenshtein($nonExistentBundleName, $bundleName);
if ($lev <= \strlen($nonExistentBundleName) / 3 && (null === $alternative || $lev < $shortest)) {
$alternative = $bundleName;
$shortest = $lev;
}
}
return $alternative;
}
}
}
namespace Symfony\Bundle\FrameworkBundle\Controller
{
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpKernel\Controller\ControllerResolver as BaseControllerResolver;
class ControllerResolver extends BaseControllerResolver
{
protected $container;
protected $parser;
public function __construct(ContainerInterface $container, ControllerNameParser $parser, LoggerInterface $logger = null)
{
$this->container = $container;
$this->parser = $parser;
parent::__construct($logger);
}
protected function createController($controller)
{
if (false === strpos($controller,'::')) {
$count = substr_count($controller,':');
if (2 == $count) {
$controller = $this->parser->parse($controller);
} elseif (1 == $count) {
list($service, $method) = explode(':', $controller, 2);
return array($this->container->get($service), $method);
} elseif ($this->container->has($controller) && method_exists($service = $this->container->get($controller),'__invoke')) {
return $service;
} else {
throw new \LogicException(sprintf('Unable to parse the controller name "%s".', $controller));
}
}
return parent::createController($controller);
}
protected function instantiateController($class)
{
if ($this->container->has($class)) {
return $this->container->get($class);
}
$controller = parent::instantiateController($class);
if ($controller instanceof ContainerAwareInterface) {
$controller->setContainer($this->container);
}
return $controller;
}
}
}
namespace Symfony\Component\Security\Http
{
use Symfony\Component\HttpFoundation\Request;
interface AccessMapInterface
{
public function getPatterns(Request $request);
}
}
namespace Symfony\Component\Security\Http
{
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestMatcherInterface;
class AccessMap implements AccessMapInterface
{
private $map = array();
public function add(RequestMatcherInterface $requestMatcher, array $attributes = array(), $channel = null)
{
$this->map[] = array($requestMatcher, $attributes, $channel);
}
public function getPatterns(Request $request)
{
foreach ($this->map as $elements) {
if (null === $elements[0] || $elements[0]->matches($request)) {
return array($elements[1], $elements[2]);
}
}
return array(null, null);
}
}
}
namespace Symfony\Component\Security\Core\Authentication
{
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\Security\Core\Authentication\Provider\AuthenticationProviderInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\AuthenticationEvents;
use Symfony\Component\Security\Core\Event\AuthenticationEvent;
use Symfony\Component\Security\Core\Event\AuthenticationFailureEvent;
use Symfony\Component\Security\Core\Exception\AccountStatusException;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\Exception\ProviderNotFoundException;
class AuthenticationProviderManager implements AuthenticationManagerInterface
{
private $providers;
private $eraseCredentials;
private $eventDispatcher;
public function __construct(array $providers, $eraseCredentials = true)
{
if (!$providers) {
throw new \InvalidArgumentException('You must at least add one authentication provider.');
}
foreach ($providers as $provider) {
if (!$provider instanceof AuthenticationProviderInterface) {
throw new \InvalidArgumentException(sprintf('Provider "%s" must implement the AuthenticationProviderInterface.', \get_class($provider)));
}
}
$this->providers = $providers;
$this->eraseCredentials = (bool) $eraseCredentials;
}
public function setEventDispatcher(EventDispatcherInterface $dispatcher)
{
$this->eventDispatcher = $dispatcher;
}
public function authenticate(TokenInterface $token)
{
$lastException = null;
$result = null;
foreach ($this->providers as $provider) {
if (!$provider->supports($token)) {
continue;
}
try {
$result = $provider->authenticate($token);
if (null !== $result) {
break;
}
} catch (AccountStatusException $e) {
$lastException = $e;
break;
} catch (AuthenticationException $e) {
$lastException = $e;
}
}
if (null !== $result) {
if (true === $this->eraseCredentials) {
$result->eraseCredentials();
}
if (null !== $this->eventDispatcher) {
$this->eventDispatcher->dispatch(AuthenticationEvents::AUTHENTICATION_SUCCESS, new AuthenticationEvent($result));
}
return $result;
}
if (null === $lastException) {
$lastException = new ProviderNotFoundException(sprintf('No Authentication Provider found for token of class "%s".', \get_class($token)));
}
if (null !== $this->eventDispatcher) {
$this->eventDispatcher->dispatch(AuthenticationEvents::AUTHENTICATION_FAILURE, new AuthenticationFailureEvent($token, $lastException));
}
$lastException->setToken($token);
throw $lastException;
}
}
}
namespace Symfony\Component\Security\Http
{
use Symfony\Component\HttpFoundation\Request;
interface FirewallMapInterface
{
public function getListeners(Request $request);
}
}
namespace Symfony\Bundle\SecurityBundle\Security
{
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\FirewallMapInterface;
class FirewallMap implements FirewallMapInterface
{
protected $container;
protected $map;
public function __construct(ContainerInterface $container, array $map)
{
$this->container = $container;
$this->map = $map;
}
public function getListeners(Request $request)
{
foreach ($this->map as $contextId => $requestMatcher) {
if (null === $requestMatcher || $requestMatcher->matches($request)) {
return $this->container->get($contextId)->getContext();
}
}
return array(array(), null, null);
}
}
}
namespace Symfony\Bundle\SecurityBundle\Security
{
use Symfony\Component\Security\Http\Firewall\ExceptionListener;
use Symfony\Component\Security\Http\Firewall\LogoutListener;
class FirewallContext
{
private $listeners;
private $exceptionListener;
private $logoutListener;
public function __construct(array $listeners, ExceptionListener $exceptionListener = null, LogoutListener $logoutListener = null)
{
$this->listeners = $listeners;
$this->exceptionListener = $exceptionListener;
$this->logoutListener = $logoutListener;
}
public function getContext()
{
return array($this->listeners, $this->exceptionListener, $this->logoutListener);
}
}
}
namespace Symfony\Component\HttpFoundation
{
interface RequestMatcherInterface
{
public function matches(Request $request);
}
}
namespace Symfony\Component\HttpFoundation
{
class RequestMatcher implements RequestMatcherInterface
{
private $path;
private $host;
private $methods = array();
private $ips = array();
private $attributes = array();
private $schemes = array();
public function __construct($path = null, $host = null, $methods = null, $ips = null, array $attributes = array(), $schemes = null)
{
$this->matchPath($path);
$this->matchHost($host);
$this->matchMethod($methods);
$this->matchIps($ips);
$this->matchScheme($schemes);
foreach ($attributes as $k => $v) {
$this->matchAttribute($k, $v);
}
}
public function matchScheme($scheme)
{
$this->schemes = null !== $scheme ? array_map('strtolower', (array) $scheme) : array();
}
public function matchHost($regexp)
{
$this->host = $regexp;
}
public function matchPath($regexp)
{
$this->path = $regexp;
}
public function matchIp($ip)
{
$this->matchIps($ip);
}
public function matchIps($ips)
{
$this->ips = null !== $ips ? (array) $ips : array();
}
public function matchMethod($method)
{
$this->methods = null !== $method ? array_map('strtoupper', (array) $method) : array();
}
public function matchAttribute($key, $regexp)
{
$this->attributes[$key] = $regexp;
}
public function matches(Request $request)
{
if ($this->schemes && !\in_array($request->getScheme(), $this->schemes, true)) {
return false;
}
if ($this->methods && !\in_array($request->getMethod(), $this->methods, true)) {
return false;
}
foreach ($this->attributes as $key => $pattern) {
if (!preg_match('{'.$pattern.'}', $request->attributes->get($key))) {
return false;
}
}
if (null !== $this->path && !preg_match('{'.$this->path.'}', rawurldecode($request->getPathInfo()))) {
return false;
}
if (null !== $this->host && !preg_match('{'.$this->host.'}i', $request->getHost())) {
return false;
}
if (IpUtils::checkIp($request->getClientIp(), $this->ips)) {
return true;
}
return 0 === \count($this->ips);
}
}
}
namespace Twig
{
class Markup implements \Countable
{
protected $content;
protected $charset;
public function __construct($content, $charset)
{
$this->content = (string) $content;
$this->charset = $charset;
}
public function __toString()
{
return $this->content;
}
public function count()
{
return \function_exists('mb_get_info') ? mb_strlen($this->content, $this->charset) : \strlen($this->content);
}
}
class_alias('Twig\Markup','Twig_Markup');
}