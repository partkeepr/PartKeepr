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

/* WebProfilerBundle:Profiler:toolbar_item.html.twig */
class __TwigTemplate_ede871b5e9099bd8ef9353770424bf5e72eabfa28e82d587324308481436da5c extends \Twig\Template
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
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "WebProfilerBundle:Profiler:toolbar_item.html.twig"));

        // line 1
        echo "<div class=\"sf-toolbar-block sf-toolbar-block-";
        echo twig_escape_filter($this->env, ($context["name"] ?? null), "html", null, true);
        echo " sf-toolbar-status-";
        echo twig_escape_filter($this->env, (((isset($context["status"]) || array_key_exists("status", $context))) ? (_twig_default_filter(($context["status"] ?? null), "normal")) : ("normal")), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, (((isset($context["additional_classes"]) || array_key_exists("additional_classes", $context))) ? (_twig_default_filter(($context["additional_classes"] ?? null), "")) : ("")), "html", null, true);
        echo "\" ";
        echo (((isset($context["block_attrs"]) || array_key_exists("block_attrs", $context))) ? (_twig_default_filter(($context["block_attrs"] ?? null), "")) : (""));
        echo ">
    ";
        // line 2
        if (( !(isset($context["link"]) || array_key_exists("link", $context)) || ($context["link"] ?? null))) {
            echo "<a href=\"";
            echo twig_escape_filter($this->env, $this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_profiler", ["token" => ($context["token"] ?? null), "panel" => ($context["name"] ?? null)]), "html", null, true);
            echo "\">";
        }
        // line 3
        echo "        <div class=\"sf-toolbar-icon\">";
        echo twig_escape_filter($this->env, (((isset($context["icon"]) || array_key_exists("icon", $context))) ? (_twig_default_filter(($context["icon"] ?? null), "")) : ("")), "html", null, true);
        echo "</div>
    ";
        // line 4
        if (( !(isset($context["link"]) || array_key_exists("link", $context)) || ($context["link"] ?? null))) {
            echo "</a>";
        }
        // line 5
        echo "        <div class=\"sf-toolbar-info\">";
        echo twig_escape_filter($this->env, (((isset($context["text"]) || array_key_exists("text", $context))) ? (_twig_default_filter(($context["text"] ?? null), "")) : ("")), "html", null, true);
        echo "</div>
</div>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "WebProfilerBundle:Profiler:toolbar_item.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  59 => 5,  55 => 4,  50 => 3,  44 => 2,  33 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("<div class=\"sf-toolbar-block sf-toolbar-block-{{ name }} sf-toolbar-status-{{ status|default('normal') }} {{ additional_classes|default('') }}\" {{ block_attrs|default('')|raw }}>
    {% if link is not defined or link %}<a href=\"{{ path('_profiler', { token: token, panel: name }) }}\">{% endif %}
        <div class=\"sf-toolbar-icon\">{{ icon|default('') }}</div>
    {% if link is not defined or link %}</a>{% endif %}
        <div class=\"sf-toolbar-info\">{{ text|default('') }}</div>
</div>
", "WebProfilerBundle:Profiler:toolbar_item.html.twig", "/var/www/pk/vendor/symfony/symfony/src/Symfony/Bundle/WebProfilerBundle/Resources/views/Profiler/toolbar_item.html.twig");
    }
}
