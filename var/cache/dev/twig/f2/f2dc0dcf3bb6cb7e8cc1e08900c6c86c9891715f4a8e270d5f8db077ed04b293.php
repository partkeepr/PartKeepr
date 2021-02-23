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

/* TwigBundle:Exception:trace.html.twig */
class __TwigTemplate_17b4133986afef0099f7f3b0910df721def50ce04736c7c3f5f5d31571b6b5b1 extends \Twig\Template
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
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "TwigBundle:Exception:trace.html.twig"));

        // line 1
        if ($this->getAttribute(($context["trace"] ?? null), "function", [])) {
            // line 2
            echo "    at
    <strong>
        <abbr title=\"";
            // line 4
            echo twig_escape_filter($this->env, $this->getAttribute(($context["trace"] ?? null), "class", []), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["trace"] ?? null), "short_class", []), "html", null, true);
            echo "</abbr>
        ";
            // line 5
            echo twig_escape_filter($this->env, ($this->getAttribute(($context["trace"] ?? null), "type", []) . $this->getAttribute(($context["trace"] ?? null), "function", [])), "html", null, true);
            echo "
    </strong>
    (";
            // line 7
            echo $this->env->getExtension('Symfony\Bridge\Twig\Extension\CodeExtension')->formatArgs($this->getAttribute(($context["trace"] ?? null), "args", []));
            echo ")
";
        }
        // line 9
        echo "
";
        // line 10
        if (((($this->getAttribute(($context["trace"] ?? null), "file", [], "any", true, true) && $this->getAttribute(($context["trace"] ?? null), "file", [])) && $this->getAttribute(($context["trace"] ?? null), "line", [], "any", true, true)) && $this->getAttribute(($context["trace"] ?? null), "line", []))) {
            // line 11
            echo "    ";
            echo (($this->getAttribute(($context["trace"] ?? null), "function", [])) ? ("<br />") : (""));
            echo "
    in ";
            // line 12
            echo $this->env->getExtension('Symfony\Bridge\Twig\Extension\CodeExtension')->formatFile($this->getAttribute(($context["trace"] ?? null), "file", []), $this->getAttribute(($context["trace"] ?? null), "line", []));
            echo "&nbsp;
    ";
            // line 13
            ob_start();
            // line 14
            echo "    <a href=\"#\" onclick=\"toggle('trace-";
            echo twig_escape_filter($this->env, ((($context["prefix"] ?? null) . "-") . ($context["i"] ?? null)), "html", null, true);
            echo "'); switchIcons('icon-";
            echo twig_escape_filter($this->env, ((($context["prefix"] ?? null) . "-") . ($context["i"] ?? null)), "html", null, true);
            echo "-open', 'icon-";
            echo twig_escape_filter($this->env, ((($context["prefix"] ?? null) . "-") . ($context["i"] ?? null)), "html", null, true);
            echo "-close'); return false;\">
        <img class=\"toggle\" id=\"icon-";
            // line 15
            echo twig_escape_filter($this->env, ((($context["prefix"] ?? null) . "-") . ($context["i"] ?? null)), "html", null, true);
            echo "-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: ";
            echo (((0 == ($context["i"] ?? null))) ? ("inline") : ("none"));
            echo "\" />
        <img class=\"toggle\" id=\"icon-";
            // line 16
            echo twig_escape_filter($this->env, ((($context["prefix"] ?? null) . "-") . ($context["i"] ?? null)), "html", null, true);
            echo "-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: ";
            echo (((0 == ($context["i"] ?? null))) ? ("none") : ("inline"));
            echo "\" />
    </a>
    ";
            echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
            // line 19
            echo "    <div id=\"trace-";
            echo twig_escape_filter($this->env, ((($context["prefix"] ?? null) . "-") . ($context["i"] ?? null)), "html", null, true);
            echo "\" style=\"display: ";
            echo (((0 == ($context["i"] ?? null))) ? ("block") : ("none"));
            echo "\" class=\"trace\">
        ";
            // line 20
            echo $this->env->getExtension('Symfony\Bridge\Twig\Extension\CodeExtension')->fileExcerpt($this->getAttribute(($context["trace"] ?? null), "file", []), $this->getAttribute(($context["trace"] ?? null), "line", []));
            echo "
    </div>
";
        }
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "TwigBundle:Exception:trace.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  101 => 20,  94 => 19,  86 => 16,  80 => 15,  71 => 14,  69 => 13,  65 => 12,  60 => 11,  58 => 10,  55 => 9,  50 => 7,  45 => 5,  39 => 4,  35 => 2,  33 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("{% if trace.function %}
    at
    <strong>
        <abbr title=\"{{ trace.class }}\">{{ trace.short_class }}</abbr>
        {{ trace.type ~ trace.function }}
    </strong>
    ({{ trace.args|format_args }})
{% endif %}

{% if trace.file is defined and trace.file and trace.line is defined and trace.line %}
    {{ trace.function ? '<br />' : '' }}
    in {{ trace.file|format_file(trace.line) }}&nbsp;
    {% spaceless %}
    <a href=\"#\" onclick=\"toggle('trace-{{ prefix ~ '-' ~ i }}'); switchIcons('icon-{{ prefix ~ '-' ~ i }}-open', 'icon-{{ prefix ~ '-' ~ i }}-close'); return false;\">
        <img class=\"toggle\" id=\"icon-{{ prefix ~ '-' ~ i }}-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: {{ 0 == i ? 'inline' : 'none' }}\" />
        <img class=\"toggle\" id=\"icon-{{ prefix ~ '-' ~ i }}-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: {{ 0 == i ? 'none' : 'inline' }}\" />
    </a>
    {% endspaceless %}
    <div id=\"trace-{{ prefix ~ '-' ~ i }}\" style=\"display: {{ 0 == i ? 'block' : 'none' }}\" class=\"trace\">
        {{ trace.file|file_excerpt(trace.line) }}
    </div>
{% endif %}
", "TwigBundle:Exception:trace.html.twig", "/var/www/pk/vendor/symfony/symfony/src/Symfony/Bundle/TwigBundle/Resources/views/Exception/trace.html.twig");
    }
}
