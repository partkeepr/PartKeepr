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

/* @Security/Collector/icon.svg */
class __TwigTemplate_50282056508fa230e823f37fab3a677f70b68d3c4e131c0e4331f10724384cc7 extends \Twig\Template
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
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "@Security/Collector/icon.svg"));

        // line 1
        echo "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=\"preserve\">
    <path fill=\"#AAAAAA\" d=\"M21,20.4V22H3v-1.6c0-3.7,2.4-6.9,5.8-8c-1.7-1.1-2.9-3-2.9-5.2c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1c0,2.2-1.2,4.1-2.9,5.2C18.6,13.5,21,16.7,21,20.4z\"/>
</svg>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "@Security/Collector/icon.svg";
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
    <path fill=\"#AAAAAA\" d=\"M21,20.4V22H3v-1.6c0-3.7,2.4-6.9,5.8-8c-1.7-1.1-2.9-3-2.9-5.2c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1c0,2.2-1.2,4.1-2.9,5.2C18.6,13.5,21,16.7,21,20.4z\"/>
</svg>
", "@Security/Collector/icon.svg", "/var/www/pk/vendor/symfony/symfony/src/Symfony/Bundle/SecurityBundle/Resources/views/Collector/icon.svg");
    }
}
