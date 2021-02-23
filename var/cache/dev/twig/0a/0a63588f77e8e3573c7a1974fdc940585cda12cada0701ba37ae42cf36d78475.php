<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* @WebProfiler/Icon/logger.svg */
class __TwigTemplate_691c2c3d6060fe442ae18ccfe4b66b6f16cd7013e5b61de2aaf261a74206e6df extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "@WebProfiler/Icon/logger.svg"));

        // line 1
        echo "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=\"preserve\">
<path fill=\"#AAAAAA\" d=\"M21,4v13.8c0,2.7-2.5,5.2-5.2,5.2H6c-0.6,0-1-0.4-1-1s0.4-1,1-1h9.8c1.6,0,3.2-1.7,3.2-3.2V4
    c0-0.6,0.4-1,1-1S21,3.4,21,4z M5.5,20C4.1,20,3,18.9,3,17.5V3.5C3,2.1,4.1,1,5.5,1h10.1C16.9,1,18,2.1,18,3.5v14.1
    c0,1.4-1.1,2.5-2.5,2.5H5.5z M9,11.4C9,11.7,9.3,12,9.6,12h1.8c0.3,0,0.6-0.3,0.6-0.6V4.6C12,4.3,11.7,4,11.4,4H9.6
    C9.3,4,9,4.3,9,4.6V11.4z M9,16.4C9,16.7,9.3,17,9.6,17h1.8c0.3,0,0.6-0.3,0.6-0.6v-1.8c0-0.3-0.3-0.6-0.6-0.6H9.6
    C9.3,14,9,14.3,9,14.6V16.4z\"/>
</svg>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Icon/logger.svg";
    }

    public function getDebugInfo()
    {
        return array (  33 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=\"preserve\">
<path fill=\"#AAAAAA\" d=\"M21,4v13.8c0,2.7-2.5,5.2-5.2,5.2H6c-0.6,0-1-0.4-1-1s0.4-1,1-1h9.8c1.6,0,3.2-1.7,3.2-3.2V4
    c0-0.6,0.4-1,1-1S21,3.4,21,4z M5.5,20C4.1,20,3,18.9,3,17.5V3.5C3,2.1,4.1,1,5.5,1h10.1C16.9,1,18,2.1,18,3.5v14.1
    c0,1.4-1.1,2.5-2.5,2.5H5.5z M9,11.4C9,11.7,9.3,12,9.6,12h1.8c0.3,0,0.6-0.3,0.6-0.6V4.6C12,4.3,11.7,4,11.4,4H9.6
    C9.3,4,9,4.3,9,4.6V11.4z M9,16.4C9,16.7,9.3,17,9.6,17h1.8c0.3,0,0.6-0.3,0.6-0.6v-1.8c0-0.3-0.3-0.6-0.6-0.6H9.6
    C9.3,14,9,14.3,9,14.6V16.4z\"/>
</svg>
", "@WebProfiler/Icon/logger.svg", "/var/www/pk/vendor/symfony/symfony/src/Symfony/Bundle/WebProfilerBundle/Resources/views/Icon/logger.svg");
    }
}
