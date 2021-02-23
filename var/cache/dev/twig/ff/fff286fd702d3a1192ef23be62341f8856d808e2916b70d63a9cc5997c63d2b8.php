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

/* @WebProfiler/Icon/request.svg */
class __TwigTemplate_c61c4e627ba55785d427c43c3e7d7f51caf4d8ece31d1d442f56f6c972373b85 extends \Twig\Template
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
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "@WebProfiler/Icon/request.svg"));

        // line 1
        echo "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=\"preserve\">
<path fill=\"#AAAAAA\" d=\"M15.8,6.4h-1.1c0,0-0.1,0.1-0.1,0l0.8-0.7c0.5-0.5,0.5-1.3,0-1.9l-1.4-1.4c-0.5-0.5-1.4-0.5-1.9,0l-0.6,0.8
    c-0.1,0,0,0,0-0.1V2.1c0-0.8-1-1.4-1.8-1.4h-2c-0.8,0-1.9,0.6-1.9,1.4v1.1c0,0,0.1,0.1,0.1,0.1L5.1,2.5c-0.5-0.5-1.3-0.5-1.9,0
    L1.8,3.9c-0.5,0.5-0.5,1.4,0,1.9l0.8,0.6c0,0.1,0,0-0.1,0H1.4C0.7,6.4,0,7.5,0,8.2v2c0,0.8,0.7,1.8,1.4,1.8h1.2c0,0,0.1-0.1,0.1-0.1
    l-0.8,0.7c-0.5,0.5-0.5,1.3,0,1.9L3.3,16c0.5,0.5,1.4,0.5,1.9,0l0.6-0.8c0.1,0-0.1,0-0.1,0.1v1.2c0,0.8,1.1,1.4,1.9,1.4h2
    c0.8,0,1.8-0.6,1.8-1.4v-1.2c0,0-0.1-0.1,0-0.1l0.7,0.8c0.5,0.5,1.3,0.5,1.9,0l1.4-1.4c0.5-0.5,0.5-1.4,0-1.9L14.6,12
    c0-0.1,0,0.1,0.1,0.1h1.1c0.8,0,1.3-1.1,1.3-1.8v-2C17.1,7.5,16.5,6.4,15.8,6.4z M8.6,13c-2.1,0-3.8-1.7-3.8-3.8
    c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C12.3,11.3,10.6,13,8.6,13z\"/>
<path fill=\"#AAAAAA\" d=\"M22.3,15.6l-0.6,0.2c0,0,0,0.1,0,0l0.3-0.5c0.2-0.4,0-0.8-0.4-1l-1-0.4c-0.4-0.2-0.8,0-1,0.4l-0.1,0.5
    c0,0,0,0,0,0l-0.2-0.6c-0.2-0.4-0.8-0.5-1.2-0.3l-1.1,0.4c-0.4,0.2-0.8,0.7-0.7,1.1l0.2,0.6c0,0,0.1,0,0.1,0l-0.5-0.3
    c-0.4-0.2-0.8,0-1,0.4l-0.4,1c-0.2,0.4,0,0.8,0.4,1l0.5,0.1c0,0,0,0,0,0l-0.6,0.2c-0.4,0.2-0.5,0.8-0.4,1.2l0.4,1.1
    c0.2,0.4,0.7,0.8,1.1,0.7l0.6-0.2c0,0,0-0.1,0,0l-0.3,0.5c-0.2,0.4,0,0.8,0.4,1l1,0.4c0.4,0.2,0.8,0,1-0.4l0.1-0.5c0,0,0,0,0,0
    l0.2,0.6c0.2,0.4,0.9,0.5,1.2,0.3l1.1-0.4c0.4-0.2,0.8-0.7,0.6-1.1l-0.2-0.6c0,0-0.1,0,0,0l0.5,0.3c0.4,0.2,0.8,0,1-0.4l0.4-1
    c0.2-0.4,0-0.8-0.4-1l-0.5-0.1c0,0,0,0,0,0l0.6-0.2c0.4-0.2,0.5-0.8,0.3-1.2l-0.4-1.1C23.2,15.9,22.7,15.5,22.3,15.6z M19.9,20.5
    c-1.1,0.4-2.3-0.1-2.7-1.2c-0.4-1.1,0.1-2.3,1.2-2.7c1.1-0.4,2.3,0.1,2.7,1.2C21.5,18.9,21,20.1,19.9,20.5z\"/>
</svg>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Icon/request.svg";
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
<path fill=\"#AAAAAA\" d=\"M15.8,6.4h-1.1c0,0-0.1,0.1-0.1,0l0.8-0.7c0.5-0.5,0.5-1.3,0-1.9l-1.4-1.4c-0.5-0.5-1.4-0.5-1.9,0l-0.6,0.8
    c-0.1,0,0,0,0-0.1V2.1c0-0.8-1-1.4-1.8-1.4h-2c-0.8,0-1.9,0.6-1.9,1.4v1.1c0,0,0.1,0.1,0.1,0.1L5.1,2.5c-0.5-0.5-1.3-0.5-1.9,0
    L1.8,3.9c-0.5,0.5-0.5,1.4,0,1.9l0.8,0.6c0,0.1,0,0-0.1,0H1.4C0.7,6.4,0,7.5,0,8.2v2c0,0.8,0.7,1.8,1.4,1.8h1.2c0,0,0.1-0.1,0.1-0.1
    l-0.8,0.7c-0.5,0.5-0.5,1.3,0,1.9L3.3,16c0.5,0.5,1.4,0.5,1.9,0l0.6-0.8c0.1,0-0.1,0-0.1,0.1v1.2c0,0.8,1.1,1.4,1.9,1.4h2
    c0.8,0,1.8-0.6,1.8-1.4v-1.2c0,0-0.1-0.1,0-0.1l0.7,0.8c0.5,0.5,1.3,0.5,1.9,0l1.4-1.4c0.5-0.5,0.5-1.4,0-1.9L14.6,12
    c0-0.1,0,0.1,0.1,0.1h1.1c0.8,0,1.3-1.1,1.3-1.8v-2C17.1,7.5,16.5,6.4,15.8,6.4z M8.6,13c-2.1,0-3.8-1.7-3.8-3.8
    c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C12.3,11.3,10.6,13,8.6,13z\"/>
<path fill=\"#AAAAAA\" d=\"M22.3,15.6l-0.6,0.2c0,0,0,0.1,0,0l0.3-0.5c0.2-0.4,0-0.8-0.4-1l-1-0.4c-0.4-0.2-0.8,0-1,0.4l-0.1,0.5
    c0,0,0,0,0,0l-0.2-0.6c-0.2-0.4-0.8-0.5-1.2-0.3l-1.1,0.4c-0.4,0.2-0.8,0.7-0.7,1.1l0.2,0.6c0,0,0.1,0,0.1,0l-0.5-0.3
    c-0.4-0.2-0.8,0-1,0.4l-0.4,1c-0.2,0.4,0,0.8,0.4,1l0.5,0.1c0,0,0,0,0,0l-0.6,0.2c-0.4,0.2-0.5,0.8-0.4,1.2l0.4,1.1
    c0.2,0.4,0.7,0.8,1.1,0.7l0.6-0.2c0,0,0-0.1,0,0l-0.3,0.5c-0.2,0.4,0,0.8,0.4,1l1,0.4c0.4,0.2,0.8,0,1-0.4l0.1-0.5c0,0,0,0,0,0
    l0.2,0.6c0.2,0.4,0.9,0.5,1.2,0.3l1.1-0.4c0.4-0.2,0.8-0.7,0.6-1.1l-0.2-0.6c0,0-0.1,0,0,0l0.5,0.3c0.4,0.2,0.8,0,1-0.4l0.4-1
    c0.2-0.4,0-0.8-0.4-1l-0.5-0.1c0,0,0,0,0,0l0.6-0.2c0.4-0.2,0.5-0.8,0.3-1.2l-0.4-1.1C23.2,15.9,22.7,15.5,22.3,15.6z M19.9,20.5
    c-1.1,0.4-2.3-0.1-2.7-1.2c-0.4-1.1,0.1-2.3,1.2-2.7c1.1-0.4,2.3,0.1,2.7,1.2C21.5,18.9,21,20.1,19.9,20.5z\"/>
</svg>
", "@WebProfiler/Icon/request.svg", "/var/www/pk/vendor/symfony/symfony/src/Symfony/Bundle/WebProfilerBundle/Resources/views/Icon/request.svg");
    }
}
