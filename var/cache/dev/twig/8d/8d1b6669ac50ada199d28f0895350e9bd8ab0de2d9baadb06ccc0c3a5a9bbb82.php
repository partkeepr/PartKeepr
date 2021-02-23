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

/* @WebProfiler/Icon/yes.svg */
class __TwigTemplate_968f9f7104a16c0f18c91a9c83a36a6734bb3b376b8e259e879fb3f992f3bd49 extends \Twig\Template
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
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "@WebProfiler/Icon/yes.svg"));

        // line 1
        echo "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"28\" height=\"28\" viewBox=\"0 0 12 12\" enable-background=\"new 0 0 12 12\" xml:space=\"preserve\">
    <path fill=\"#5E976E\" d=\"M12,3.1c0,0.4-0.1,0.8-0.4,1.1L5.9,9.8c-0.3,0.3-0.6,0.4-1,0.4c-0.4,0-0.7-0.1-1-0.4L0.4,6.3
    C0.1,6,0,5.6,0,5.2c0-0.4,0.2-0.7,0.4-0.9C0.6,4,1,3.9,1.3,3.9c0.4,0,0.8,0.1,1.1,0.4l2.5,2.5l4.7-4.7c0.3-0.3,0.7-0.4,1-0.4
    c0.4,0,0.7,0.2,0.9,0.4C11.8,2.4,12,2.7,12,3.1z\"/>
</svg>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Icon/yes.svg";
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
    <path fill=\"#5E976E\" d=\"M12,3.1c0,0.4-0.1,0.8-0.4,1.1L5.9,9.8c-0.3,0.3-0.6,0.4-1,0.4c-0.4,0-0.7-0.1-1-0.4L0.4,6.3
    C0.1,6,0,5.6,0,5.2c0-0.4,0.2-0.7,0.4-0.9C0.6,4,1,3.9,1.3,3.9c0.4,0,0.8,0.1,1.1,0.4l2.5,2.5l4.7-4.7c0.3-0.3,0.7-0.4,1-0.4
    c0.4,0,0.7,0.2,0.9,0.4C11.8,2.4,12,2.7,12,3.1z\"/>
</svg>
", "@WebProfiler/Icon/yes.svg", "/var/www/pk/vendor/symfony/symfony/src/Symfony/Bundle/WebProfilerBundle/Resources/views/Icon/yes.svg");
    }
}
