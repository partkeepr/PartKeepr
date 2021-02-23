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

/* TwigBundle:Exception:exception.html.twig */
class __TwigTemplate_6533517d9ad11f5ccfa68e87c8a7779595006e934b7ed208f593289544696417 extends \Twig\Template
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
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "TwigBundle:Exception:exception.html.twig"));

        // line 1
        echo "<div class=\"block-exception\">
    <div class=\"block-exception-detected clear-fix\">
        <div class=\"illustration-exception\">
            <img alt=\"Exception detected!\" src=\"data:image/png;base64,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\" />
        </div>
        <div class=\"text-exception\">
            <div class=\"open-quote\">
                <img alt=\"\" src=\"data:image/gif;base64,R0lGODlhHAAWAMQQANra2+bl5s3Mzevr6/Pz8+jo6O3t7fHx8c/Oz+Pj49PS093d3djX2NXV1eDf4MrJyvb29gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABAALAAAAAAcABYAQAWWICSOEDE4AamqRuAsT5yu6hA/wNrcfNysjl5PBOAJAAUDDRLoNRKDndAHnN6k058qaH2QuNelqCAYIm45MfGmIJCkAvUIPNB1td/uAyvEz/UqB0VUagQOZTEjgzx+Kk1CEAU8DAdqB4gPCHVjNwhucphKbzefamAFdlaNEGBZd1V3r1t6fE6wqrJ5XS4Ovb69MyQnv8QhADs=\" />
            </div>

            <h1>";
        // line 11
        echo $this->env->getExtension('Symfony\Bridge\Twig\Extension\CodeExtension')->formatFileFromText(nl2br(twig_escape_filter($this->env, $this->getAttribute(($context["exception"] ?? null), "message", []), "html", null, true)));
        echo "</h1>

            <div>
                <strong>";
        // line 14
        echo twig_escape_filter($this->env, ($context["status_code"] ?? null), "html", null, true);
        echo "</strong> ";
        echo twig_escape_filter($this->env, ($context["status_text"] ?? null), "html", null, true);
        echo " - ";
        echo $this->env->getExtension('Symfony\Bridge\Twig\Extension\CodeExtension')->abbrClass($this->getAttribute(($context["exception"] ?? null), "class", []));
        echo "
            </div>

            ";
        // line 17
        $context["previous_count"] = twig_length_filter($this->env, $this->getAttribute(($context["exception"] ?? null), "allPrevious", []));
        // line 18
        echo "            ";
        if (($context["previous_count"] ?? null)) {
            // line 19
            echo "                <div class=\"linked\"><span><strong>";
            echo twig_escape_filter($this->env, ($context["previous_count"] ?? null), "html", null, true);
            echo "</strong> linked Exception";
            echo (((($context["previous_count"] ?? null) > 1)) ? ("s") : (""));
            echo ":</span>
                    <ul>
                        ";
            // line 21
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["exception"] ?? null), "allPrevious", []));
            foreach ($context['_seq'] as $context["i"] => $context["previous"]) {
                // line 22
                echo "                            <li>
                                ";
                // line 23
                echo $this->env->getExtension('Symfony\Bridge\Twig\Extension\CodeExtension')->abbrClass($this->getAttribute($context["previous"], "class", []));
                echo " <a href=\"#traces-link-";
                echo twig_escape_filter($this->env, ($context["i"] + 1), "html", null, true);
                echo "\" onclick=\"toggle('traces-";
                echo twig_escape_filter($this->env, ($context["i"] + 1), "html", null, true);
                echo "', 'traces'); switchIcons('icon-traces-";
                echo twig_escape_filter($this->env, ($context["i"] + 1), "html", null, true);
                echo "-open', 'icon-traces-";
                echo twig_escape_filter($this->env, ($context["i"] + 1), "html", null, true);
                echo "-close');\">&#187;</a>
                            </li>
                        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['i'], $context['previous'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 26
            echo "                    </ul>
                </div>
            ";
        }
        // line 29
        echo "
            <div class=\"close-quote\">
                <img alt=\"\" src=\"data:image/gif;base64,R0lGODlhHAAWAMQQANra2+bl5s3Mzevr6/Pz8+jo6O3t7fHx8c/Oz+Pj49PS093d3djX2NXV1eDf4MrJyvb29gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABAALAAAAAAcABYAQAWZoCOO5ACdaECuweO+sIOiDWw36IC8wjH/kAMDVoDYbLJf7ejC/QqvJHBGeC0fAgdhOrsCfDNmFHg9lo9SmvhxRpLXTpSBx6XuXNBjoN4GoNYPaSdtVoCCEIRNhm9iiS6Hjo6BjExxOWN1KAJNQAAvJpkQLS4LVAovfqGeLggQAwlne1MGBQCbqCc2AkV8bigOAQahKQ4DW0AhADs=\" />
            </div>
        </div>
    </div>
</div>

";
        // line 37
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["exception"] ?? null), "toarray", []));
        foreach ($context['_seq'] as $context["position"] => $context["e"]) {
            // line 38
            echo "    ";
            $this->loadTemplate("@Twig/Exception/traces.html.twig", "TwigBundle:Exception:exception.html.twig", 38)->display(twig_to_array(["exception" => $context["e"], "position" => $context["position"], "count" => ($context["previous_count"] ?? null)]));
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['position'], $context['e'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 40
        echo "
";
        // line 41
        if (($context["logger"] ?? null)) {
            // line 42
            echo "    <div class=\"block\">
        <div class=\"logs clear-fix\">
            ";
            // line 44
            ob_start();
            // line 45
            echo "            <h2>
                Logs&nbsp;
                <a href=\"#\" onclick=\"toggle('logs'); switchIcons('icon-logs-open', 'icon-logs-close'); return false;\">
                    <img class=\"toggle\" id=\"icon-logs-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: none\" />
                    <img class=\"toggle\" id=\"icon-logs-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: inline\" />
                </a>
            </h2>
            ";
            echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
            // line 53
            echo "
            ";
            // line 54
            if ($this->getAttribute(($context["logger"] ?? null), "counterrors", [])) {
                // line 55
                echo "                <div class=\"error-count\">
                    <span>
                        ";
                // line 57
                echo twig_escape_filter($this->env, $this->getAttribute(($context["logger"] ?? null), "counterrors", []), "html", null, true);
                echo " error";
                echo ((($this->getAttribute(($context["logger"] ?? null), "counterrors", []) > 1)) ? ("s") : (""));
                echo "
                    </span>
                </div>
            ";
            }
            // line 61
            echo "        </div>

        <div id=\"logs\">
            ";
            // line 64
            $this->loadTemplate("@Twig/Exception/logs.html.twig", "TwigBundle:Exception:exception.html.twig", 64)->display(twig_to_array(["logs" => $this->getAttribute(($context["logger"] ?? null), "logs", [])]));
            // line 65
            echo "        </div>
    </div>
";
        }
        // line 68
        echo "
";
        // line 69
        if (($context["currentContent"] ?? null)) {
            // line 70
            echo "    <div class=\"block\">
        ";
            // line 71
            ob_start();
            // line 72
            echo "        <h2>
            Content of the Output&nbsp;
            <a href=\"#\" onclick=\"toggle('output-content'); switchIcons('icon-content-open', 'icon-content-close'); return false;\">
                <img class=\"toggle\" id=\"icon-content-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" />
                <img class=\"toggle\" id=\"icon-content-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" />
            </a>
        </h2>
        ";
            echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
            // line 80
            echo "
        <div id=\"output-content\" style=\"display: none\">
            ";
            // line 82
            echo twig_escape_filter($this->env, ($context["currentContent"] ?? null), "html", null, true);
            echo "
        </div>

        <div style=\"clear: both\"></div>
    </div>
";
        }
        // line 88
        echo "
";
        // line 89
        $this->loadTemplate("@Twig/Exception/traces_text.html.twig", "TwigBundle:Exception:exception.html.twig", 89)->display(twig_to_array(["exception" => ($context["exception"] ?? null)]));
        // line 90
        echo "
<script type=\"text/javascript\">//<![CDATA[
    function toggle(id, clazz) {
        var el = document.getElementById(id),
            current = el.style.display,
            i;

        if (clazz) {
            var tags = document.getElementsByTagName('*');
            for (i = tags.length - 1; i >= 0; i--) {
                if (tags[i].className === clazz) {
                    tags[i].style.display = 'none';
                }
            }
        }

        el.style.display = current === 'none' ? 'block' : 'none';
    }

    function switchIcons(id1, id2) {
        var icon1, icon2, display1, display2;

        icon1 = document.getElementById(id1);
        icon2 = document.getElementById(id2);

        display1 = icon1.style.display;
        display2 = icon2.style.display;

        icon1.style.display = display2;
        icon2.style.display = display1;
    }
//]]></script>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "TwigBundle:Exception:exception.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  213 => 90,  211 => 89,  208 => 88,  199 => 82,  195 => 80,  185 => 72,  183 => 71,  180 => 70,  178 => 69,  175 => 68,  170 => 65,  168 => 64,  163 => 61,  154 => 57,  150 => 55,  148 => 54,  145 => 53,  135 => 45,  133 => 44,  129 => 42,  127 => 41,  124 => 40,  117 => 38,  113 => 37,  103 => 29,  98 => 26,  81 => 23,  78 => 22,  74 => 21,  66 => 19,  63 => 18,  61 => 17,  51 => 14,  45 => 11,  33 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("<div class=\"block-exception\">
    <div class=\"block-exception-detected clear-fix\">
        <div class=\"illustration-exception\">
            <img alt=\"Exception detected!\" src=\"data:image/png;base64,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\" />
        </div>
        <div class=\"text-exception\">
            <div class=\"open-quote\">
                <img alt=\"\" src=\"data:image/gif;base64,R0lGODlhHAAWAMQQANra2+bl5s3Mzevr6/Pz8+jo6O3t7fHx8c/Oz+Pj49PS093d3djX2NXV1eDf4MrJyvb29gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABAALAAAAAAcABYAQAWWICSOEDE4AamqRuAsT5yu6hA/wNrcfNysjl5PBOAJAAUDDRLoNRKDndAHnN6k058qaH2QuNelqCAYIm45MfGmIJCkAvUIPNB1td/uAyvEz/UqB0VUagQOZTEjgzx+Kk1CEAU8DAdqB4gPCHVjNwhucphKbzefamAFdlaNEGBZd1V3r1t6fE6wqrJ5XS4Ovb69MyQnv8QhADs=\" />
            </div>

            <h1>{{ exception.message|nl2br|format_file_from_text }}</h1>

            <div>
                <strong>{{ status_code }}</strong> {{ status_text }} - {{ exception.class|abbr_class }}
            </div>

            {% set previous_count = exception.allPrevious|length %}
            {% if previous_count %}
                <div class=\"linked\"><span><strong>{{ previous_count }}</strong> linked Exception{{ previous_count > 1 ? 's' : '' }}:</span>
                    <ul>
                        {% for i, previous in exception.allPrevious %}
                            <li>
                                {{ previous.class|abbr_class }} <a href=\"#traces-link-{{ i + 1 }}\" onclick=\"toggle('traces-{{ i + 1 }}', 'traces'); switchIcons('icon-traces-{{ i + 1 }}-open', 'icon-traces-{{ i + 1 }}-close');\">&#187;</a>
                            </li>
                        {% endfor %}
                    </ul>
                </div>
            {% endif %}

            <div class=\"close-quote\">
                <img alt=\"\" src=\"data:image/gif;base64,R0lGODlhHAAWAMQQANra2+bl5s3Mzevr6/Pz8+jo6O3t7fHx8c/Oz+Pj49PS093d3djX2NXV1eDf4MrJyvb29gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABAALAAAAAAcABYAQAWZoCOO5ACdaECuweO+sIOiDWw36IC8wjH/kAMDVoDYbLJf7ejC/QqvJHBGeC0fAgdhOrsCfDNmFHg9lo9SmvhxRpLXTpSBx6XuXNBjoN4GoNYPaSdtVoCCEIRNhm9iiS6Hjo6BjExxOWN1KAJNQAAvJpkQLS4LVAovfqGeLggQAwlne1MGBQCbqCc2AkV8bigOAQahKQ4DW0AhADs=\" />
            </div>
        </div>
    </div>
</div>

{% for position, e in exception.toarray %}
    {% include '@Twig/Exception/traces.html.twig' with { 'exception': e, 'position': position, 'count': previous_count } only %}
{% endfor %}

{% if logger %}
    <div class=\"block\">
        <div class=\"logs clear-fix\">
            {% spaceless %}
            <h2>
                Logs&nbsp;
                <a href=\"#\" onclick=\"toggle('logs'); switchIcons('icon-logs-open', 'icon-logs-close'); return false;\">
                    <img class=\"toggle\" id=\"icon-logs-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: none\" />
                    <img class=\"toggle\" id=\"icon-logs-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: inline\" />
                </a>
            </h2>
            {% endspaceless %}

            {% if logger.counterrors %}
                <div class=\"error-count\">
                    <span>
                        {{ logger.counterrors }} error{{ logger.counterrors > 1 ? 's' : ''}}
                    </span>
                </div>
            {% endif %}
        </div>

        <div id=\"logs\">
            {% include '@Twig/Exception/logs.html.twig' with { 'logs': logger.logs } only %}
        </div>
    </div>
{% endif %}

{% if currentContent %}
    <div class=\"block\">
        {% spaceless %}
        <h2>
            Content of the Output&nbsp;
            <a href=\"#\" onclick=\"toggle('output-content'); switchIcons('icon-content-open', 'icon-content-close'); return false;\">
                <img class=\"toggle\" id=\"icon-content-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" />
                <img class=\"toggle\" id=\"icon-content-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" />
            </a>
        </h2>
        {% endspaceless %}

        <div id=\"output-content\" style=\"display: none\">
            {{ currentContent }}
        </div>

        <div style=\"clear: both\"></div>
    </div>
{% endif %}

{% include '@Twig/Exception/traces_text.html.twig' with { 'exception': exception } only %}

<script type=\"text/javascript\">//<![CDATA[
    function toggle(id, clazz) {
        var el = document.getElementById(id),
            current = el.style.display,
            i;

        if (clazz) {
            var tags = document.getElementsByTagName('*');
            for (i = tags.length - 1; i >= 0; i--) {
                if (tags[i].className === clazz) {
                    tags[i].style.display = 'none';
                }
            }
        }

        el.style.display = current === 'none' ? 'block' : 'none';
    }

    function switchIcons(id1, id2) {
        var icon1, icon2, display1, display2;

        icon1 = document.getElementById(id1);
        icon2 = document.getElementById(id2);

        display1 = icon1.style.display;
        display2 = icon2.style.display;

        icon1.style.display = display2;
        icon2.style.display = display1;
    }
//]]></script>
", "TwigBundle:Exception:exception.html.twig", "/var/www/pk/vendor/symfony/symfony/src/Symfony/Bundle/TwigBundle/Resources/views/Exception/exception.html.twig");
    }
}
