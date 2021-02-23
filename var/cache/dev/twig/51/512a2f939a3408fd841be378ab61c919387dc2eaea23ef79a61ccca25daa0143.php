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

/* SecurityBundle:Collector:security.html.twig */
class __TwigTemplate_11fa5778607923e3226f553f5ab54d3e4b8106b87a2a5ecbfcc05929d0fb30b5 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->blocks = [
            'page_title' => [$this, 'block_page_title'],
            'toolbar' => [$this, 'block_toolbar'],
            'menu' => [$this, 'block_menu'],
            'panel' => [$this, 'block_panel'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "@WebProfiler/Profiler/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "SecurityBundle:Collector:security.html.twig"));

        $this->parent = $this->loadTemplate("@WebProfiler/Profiler/layout.html.twig", "SecurityBundle:Collector:security.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 3
    public function block_page_title($context, array $blocks = [])
    {
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "page_title"));

        echo "Security";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 5
    public function block_toolbar($context, array $blocks = [])
    {
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "toolbar"));

        // line 6
        echo "    ";
        if ($this->getAttribute(($context["collector"] ?? null), "tokenClass", [])) {
            // line 7
            echo "        ";
            $context["is_authenticated"] = ($this->getAttribute(($context["collector"] ?? null), "enabled", []) && $this->getAttribute(($context["collector"] ?? null), "authenticated", []));
            // line 8
            echo "        ";
            $context["color_code"] = ((($context["is_authenticated"] ?? null)) ? ("") : ("yellow"));
            // line 9
            echo "    ";
        } else {
            // line 10
            echo "        ";
            $context["color_code"] = (($this->getAttribute(($context["collector"] ?? null), "enabled", [])) ? ("red") : (""));
            // line 11
            echo "    ";
        }
        // line 12
        echo "
    ";
        // line 13
        ob_start();
        // line 14
        echo "        ";
        echo twig_include($this->env, $context, "@Security/Collector/icon.svg");
        echo "
        <span class=\"sf-toolbar-value\">";
        // line 15
        echo twig_escape_filter($this->env, (($this->getAttribute(($context["collector"] ?? null), "user", [], "any", true, true)) ? (_twig_default_filter($this->getAttribute(($context["collector"] ?? null), "user", []), "n/a")) : ("n/a")), "html", null, true);
        echo "</span>
    ";
        $context["icon"] = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 17
        echo "
    ";
        // line 18
        ob_start();
        // line 19
        echo "        ";
        if ($this->getAttribute(($context["collector"] ?? null), "tokenClass", [])) {
            // line 20
            echo "            <div class=\"sf-toolbar-info-piece\">
                <b>Logged in as</b>
                <span>";
            // line 22
            echo twig_escape_filter($this->env, $this->getAttribute(($context["collector"] ?? null), "user", []), "html", null, true);
            echo "</span>
            </div>

            <div class=\"sf-toolbar-info-piece\">
                <b>Authenticated</b>
                <span class=\"sf-toolbar-status sf-toolbar-status-";
            // line 27
            echo ((($context["is_authenticated"] ?? null)) ? ("green") : ("red"));
            echo "\">";
            echo ((($context["is_authenticated"] ?? null)) ? ("Yes") : ("No"));
            echo "</span>
            </div>

            ";
            // line 30
            if (($this->getAttribute(($context["collector"] ?? null), "tokenClass", []) != null)) {
                // line 31
                echo "            <div class=\"sf-toolbar-info-piece\">
                <b>Token class</b>
                <span>";
                // line 33
                echo $this->env->getExtension('Symfony\Bridge\Twig\Extension\CodeExtension')->abbrClass($this->getAttribute(($context["collector"] ?? null), "tokenClass", []));
                echo "</span>
            </div>
            ";
            }
            // line 36
            echo "            ";
            if ($this->getAttribute(($context["collector"] ?? null), "logoutUrl", [])) {
                // line 37
                echo "            <div class=\"sf-toolbar-info-piece\">
                <b>Actions</b>
                <span><a href=\"";
                // line 39
                echo twig_escape_filter($this->env, $this->getAttribute(($context["collector"] ?? null), "logoutUrl", []), "html", null, true);
                echo "\">Logout</a></span>
            </div>
            ";
            }
            // line 42
            echo "        ";
        } elseif ($this->getAttribute(($context["collector"] ?? null), "enabled", [])) {
            // line 43
            echo "            <div class=\"sf-toolbar-info-piece\">
                <span>You are not authenticated.</span>
            </div>
        ";
        } else {
            // line 47
            echo "            <div class=\"sf-toolbar-info-piece\">
                <span>The security is disabled.</span>
            </div>
        ";
        }
        // line 51
        echo "    ";
        $context["text"] = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 52
        echo "
    ";
        // line 53
        echo twig_include($this->env, $context, "@WebProfiler/Profiler/toolbar_item.html.twig", ["link" => ($context["profiler_url"] ?? null), "status" => ($context["color_code"] ?? null)]);
        echo "
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 56
    public function block_menu($context, array $blocks = [])
    {
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "menu"));

        // line 57
        echo "    <span class=\"label ";
        echo ((( !$this->getAttribute(($context["collector"] ?? null), "enabled", []) ||  !$this->getAttribute(($context["collector"] ?? null), "tokenClass", []))) ? ("disabled") : (""));
        echo "\">
        <span class=\"icon\">";
        // line 58
        echo twig_include($this->env, $context, "@Security/Collector/icon.svg");
        echo "</span>
        <strong>Security</strong>
    </span>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 63
    public function block_panel($context, array $blocks = [])
    {
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "panel"));

        // line 64
        echo "    <h2>Security Token</h2>

    ";
        // line 66
        if ($this->getAttribute(($context["collector"] ?? null), "tokenClass", [])) {
            // line 67
            echo "        <div class=\"metrics\">
            <div class=\"metric\">
                <span class=\"value\">";
            // line 69
            ((($this->getAttribute(($context["collector"] ?? null), "user", []) == "anon.")) ? (print ("Anonymous")) : (print (twig_escape_filter($this->env, $this->getAttribute(($context["collector"] ?? null), "user", []), "html", null, true))));
            echo "</span>
                <span class=\"label\">Username</span>
            </div>

            <div class=\"metric\">
                <span class=\"value\">";
            // line 74
            echo twig_include($this->env, $context, (("@WebProfiler/Icon/" . (($this->getAttribute(($context["collector"] ?? null), "authenticated", [])) ? ("yes") : ("no"))) . ".svg"));
            echo "</span>
                <span class=\"label\">Authenticated</span>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th scope=\"col\" class=\"key\">Property</th>
                    <th scope=\"col\">Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Roles</th>
                    <td>
                        ";
            // line 90
            ((twig_test_empty($this->getAttribute(($context["collector"] ?? null), "roles", []))) ? (print ("none")) : (print (twig_escape_filter($this->env, $this->env->getExtension('Symfony\Bridge\Twig\Extension\YamlExtension')->encode($this->getAttribute(($context["collector"] ?? null), "roles", [])), "html", null, true))));
            echo "

                        ";
            // line 92
            if (( !$this->getAttribute(($context["collector"] ?? null), "authenticated", []) && twig_test_empty($this->getAttribute(($context["collector"] ?? null), "roles", [])))) {
                // line 93
                echo "                            <p class=\"help\">User is not authenticated probably because they have no roles.</p>
                        ";
            }
            // line 95
            echo "                    </td>
                </tr>

                ";
            // line 98
            if ($this->getAttribute(($context["collector"] ?? null), "supportsRoleHierarchy", [])) {
                // line 99
                echo "                <tr>
                    <th>Inherited Roles</th>
                    <td>";
                // line 101
                ((twig_test_empty($this->getAttribute(($context["collector"] ?? null), "inheritedRoles", []))) ? (print ("none")) : (print (twig_escape_filter($this->env, $this->env->getExtension('Symfony\Bridge\Twig\Extension\YamlExtension')->encode($this->getAttribute(($context["collector"] ?? null), "inheritedRoles", [])), "html", null, true))));
                echo "</td>
                </tr>
                ";
            }
            // line 104
            echo "
                ";
            // line 105
            if ($this->getAttribute(($context["collector"] ?? null), "tokenClass", [])) {
                // line 106
                echo "                <tr>
                    <th>Token class</th>
                    <td>";
                // line 108
                echo twig_escape_filter($this->env, $this->getAttribute(($context["collector"] ?? null), "tokenClass", []), "html", null, true);
                echo "</td>
                </tr>
                ";
            }
            // line 111
            echo "            </tbody>
        </table>
    ";
        } elseif ($this->getAttribute(        // line 113
($context["collector"] ?? null), "enabled", [])) {
            // line 114
            echo "        <div class=\"empty\">
            <p>There is no security token.</p>
        </div>
    ";
        } else {
            // line 118
            echo "        <div class=\"empty\">
            <p>The security component is disabled.</p>
        </div>
    ";
        }
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "SecurityBundle:Collector:security.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  302 => 118,  296 => 114,  294 => 113,  290 => 111,  284 => 108,  280 => 106,  278 => 105,  275 => 104,  269 => 101,  265 => 99,  263 => 98,  258 => 95,  254 => 93,  252 => 92,  247 => 90,  228 => 74,  220 => 69,  216 => 67,  214 => 66,  210 => 64,  204 => 63,  193 => 58,  188 => 57,  182 => 56,  173 => 53,  170 => 52,  167 => 51,  161 => 47,  155 => 43,  152 => 42,  146 => 39,  142 => 37,  139 => 36,  133 => 33,  129 => 31,  127 => 30,  119 => 27,  111 => 22,  107 => 20,  104 => 19,  102 => 18,  99 => 17,  94 => 15,  89 => 14,  87 => 13,  84 => 12,  81 => 11,  78 => 10,  75 => 9,  72 => 8,  69 => 7,  66 => 6,  60 => 5,  48 => 3,  32 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("{% extends '@WebProfiler/Profiler/layout.html.twig' %}

{% block page_title 'Security' %}

{% block toolbar %}
    {% if collector.tokenClass %}
        {% set is_authenticated = collector.enabled and collector.authenticated  %}
        {% set color_code = is_authenticated ? '' : 'yellow' %}
    {% else %}
        {% set color_code = collector.enabled ? 'red' : '' %}
    {% endif %}

    {% set icon %}
        {{ include('@Security/Collector/icon.svg') }}
        <span class=\"sf-toolbar-value\">{{ collector.user|default('n/a') }}</span>
    {% endset %}

    {% set text %}
        {% if collector.tokenClass %}
            <div class=\"sf-toolbar-info-piece\">
                <b>Logged in as</b>
                <span>{{ collector.user }}</span>
            </div>

            <div class=\"sf-toolbar-info-piece\">
                <b>Authenticated</b>
                <span class=\"sf-toolbar-status sf-toolbar-status-{{ is_authenticated ? 'green' : 'red' }}\">{{ is_authenticated ? 'Yes' : 'No' }}</span>
            </div>

            {% if collector.tokenClass != null %}
            <div class=\"sf-toolbar-info-piece\">
                <b>Token class</b>
                <span>{{ collector.tokenClass|abbr_class }}</span>
            </div>
            {% endif %}
            {% if collector.logoutUrl %}
            <div class=\"sf-toolbar-info-piece\">
                <b>Actions</b>
                <span><a href=\"{{ collector.logoutUrl }}\">Logout</a></span>
            </div>
            {% endif %}
        {% elseif collector.enabled %}
            <div class=\"sf-toolbar-info-piece\">
                <span>You are not authenticated.</span>
            </div>
        {% else %}
            <div class=\"sf-toolbar-info-piece\">
                <span>The security is disabled.</span>
            </div>
        {% endif %}
    {% endset %}

    {{ include('@WebProfiler/Profiler/toolbar_item.html.twig', { link: profiler_url, status: color_code }) }}
{% endblock %}

{% block menu %}
    <span class=\"label {{ not collector.enabled or not collector.tokenClass ? 'disabled' }}\">
        <span class=\"icon\">{{ include('@Security/Collector/icon.svg') }}</span>
        <strong>Security</strong>
    </span>
{% endblock %}

{% block panel %}
    <h2>Security Token</h2>

    {% if collector.tokenClass %}
        <div class=\"metrics\">
            <div class=\"metric\">
                <span class=\"value\">{{ collector.user == 'anon.' ? 'Anonymous' : collector.user }}</span>
                <span class=\"label\">Username</span>
            </div>

            <div class=\"metric\">
                <span class=\"value\">{{ include('@WebProfiler/Icon/' ~ (collector.authenticated ? 'yes' : 'no') ~ '.svg') }}</span>
                <span class=\"label\">Authenticated</span>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th scope=\"col\" class=\"key\">Property</th>
                    <th scope=\"col\">Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Roles</th>
                    <td>
                        {{ collector.roles is empty ? 'none' : collector.roles|yaml_encode }}

                        {% if not collector.authenticated and collector.roles is empty %}
                            <p class=\"help\">User is not authenticated probably because they have no roles.</p>
                        {% endif %}
                    </td>
                </tr>

                {% if collector.supportsRoleHierarchy %}
                <tr>
                    <th>Inherited Roles</th>
                    <td>{{ collector.inheritedRoles is empty ? 'none' : collector.inheritedRoles|yaml_encode }}</td>
                </tr>
                {% endif %}

                {% if collector.tokenClass %}
                <tr>
                    <th>Token class</th>
                    <td>{{ collector.tokenClass }}</td>
                </tr>
                {% endif %}
            </tbody>
        </table>
    {% elseif collector.enabled %}
        <div class=\"empty\">
            <p>There is no security token.</p>
        </div>
    {% else %}
        <div class=\"empty\">
            <p>The security component is disabled.</p>
        </div>
    {% endif %}
{% endblock %}
", "SecurityBundle:Collector:security.html.twig", "/var/www/pk/vendor/symfony/symfony/src/Symfony/Bundle/SecurityBundle/Resources/views/Collector/security.html.twig");
    }
}
