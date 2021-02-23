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

/* @WebProfiler/Icon/config.svg */
class __TwigTemplate_8dcf8c5ed43900eb9c5343b2ecef21201a09e5edd8fe90f453dac3a1c4df721f extends \Twig\Template
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
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "@WebProfiler/Icon/config.svg"));

        // line 1
        echo "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=\"preserve\">
    <path fill=\"#AAAAAA\" d=\"M11,5.1C11,3.4,9.6,2,7.9,2H5.1C3.4,2,2,3.4,2,5.1v12.9C2,19.6,3.4,21,5.1,21h2.9c1.7,0,3.1-1.4,3.1-3.1V5.1z M5.2,4h2.7C8.4,4,9,4.8,9,5.3V11H4V5.3C4,4.8,4.6,4,5.2,4z M22,5.1C22,3.4,20.6,2,18.9,2h-2.9C14.4,2,13,3.4,13,5.1v12.9c0,1.7,1.4,3.1,3.1,3.1h2.9c1.7,0,3.1-1.4,3.1-3.1V5.1z M16,4h2.8C19.4,4,20,4.8,20,5.3V8h-5V5.3C15,4.8,15.5,4,16,4z\"/>
</svg>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Icon/config.svg";
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
    <path fill=\"#AAAAAA\" d=\"M11,5.1C11,3.4,9.6,2,7.9,2H5.1C3.4,2,2,3.4,2,5.1v12.9C2,19.6,3.4,21,5.1,21h2.9c1.7,0,3.1-1.4,3.1-3.1V5.1z M5.2,4h2.7C8.4,4,9,4.8,9,5.3V11H4V5.3C4,4.8,4.6,4,5.2,4z M22,5.1C22,3.4,20.6,2,18.9,2h-2.9C14.4,2,13,3.4,13,5.1v12.9c0,1.7,1.4,3.1,3.1,3.1h2.9c1.7,0,3.1-1.4,3.1-3.1V5.1z M16,4h2.8C19.4,4,20,4.8,20,5.3V8h-5V5.3C15,4.8,15.5,4,16,4z\"/>
</svg>
", "@WebProfiler/Icon/config.svg", "/var/www/pk/vendor/symfony/symfony/src/Symfony/Bundle/WebProfilerBundle/Resources/views/Icon/config.svg");
    }
}
