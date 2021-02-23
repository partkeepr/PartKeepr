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

/* @WebProfiler/Icon/no.svg */
class __TwigTemplate_9213fcd13b71ba787b19b994941d4b9210e1717c3397dc27676561641d93e346 extends \Twig\Template
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
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "@WebProfiler/Icon/no.svg"));

        // line 1
        echo "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"28\" height=\"28\" viewBox=\"0 0 12 12\" enable-background=\"new 0 0 12 12\" xml:space=\"preserve\">
    <path fill=\"#B0413E\" d=\"M10.4,8.4L8,6l2.4-2.4c0.8-0.8,0.7-1.6,0.2-2.2C10,0.9,9.2,0.8,8.4,1.6L6,4L3.6,1.6C2.8,0.8,2,0.9,1.4,1.4
    C0.9,2,0.8,2.8,1.6,3.6L4,6L1.6,8.4C0.8,9.2,0.9,10,1.4,10.6c0.6,0.6,1.4,0.6,2.2-0.2L6,8l2.4,2.4c0.8,0.8,1.6,0.7,2.2,0.2
    C11.1,10,11.2,9.2,10.4,8.4z\"/>
</svg>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Icon/no.svg";
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
        return new Source("<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"28\" height=\"28\" viewBox=\"0 0 12 12\" enable-background=\"new 0 0 12 12\" xml:space=\"preserve\">
    <path fill=\"#B0413E\" d=\"M10.4,8.4L8,6l2.4-2.4c0.8-0.8,0.7-1.6,0.2-2.2C10,0.9,9.2,0.8,8.4,1.6L6,4L3.6,1.6C2.8,0.8,2,0.9,1.4,1.4
    C0.9,2,0.8,2.8,1.6,3.6L4,6L1.6,8.4C0.8,9.2,0.9,10,1.4,10.6c0.6,0.6,1.4,0.6,2.2-0.2L6,8l2.4,2.4c0.8,0.8,1.6,0.7,2.2,0.2
    C11.1,10,11.2,9.2,10.4,8.4z\"/>
</svg>
", "@WebProfiler/Icon/no.svg", "/var/www/pk/vendor/symfony/symfony/src/Symfony/Bundle/WebProfilerBundle/Resources/views/Icon/no.svg");
    }
}
