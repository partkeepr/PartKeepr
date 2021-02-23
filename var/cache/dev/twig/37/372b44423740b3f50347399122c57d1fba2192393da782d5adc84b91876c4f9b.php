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

/* LiipFunctionalTestBundle::layout.html.twig */
class __TwigTemplate_3dce5ad07d97b98e0b0c4d51e73df86fae9aed75557263917afd0470f03454e3 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'body' => [$this, 'block_body'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "LiipFunctionalTestBundle::layout.html.twig"));

        // line 1
        echo "<!DOCTYPE html>
<html lang=\"en\">
    <head>
        <meta charset=\"utf-8\">
        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />
        
        <title>LiipFunctionalTestBundle</title>
    </head>
    
    <body>
        <p id=\"user\">";
        // line 12
        if ((null === $this->getAttribute(($context["app"] ?? null), "user", []))) {
            // line 13
            echo "Not logged in.";
        } else {
            // line 15
            echo "Logged in as ";
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["app"] ?? null), "user", []), "username", []), "html", null, true);
            echo ".";
        }
        // line 17
        echo "</p>

        <h1>LiipFunctionalTestBundle</h1>
        
        ";
        // line 21
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute($this->getAttribute(($context["app"] ?? null), "session", []), "flashbag", []), "get", [0 => "notice"], "method"));
        foreach ($context['_seq'] as $context["_key"] => $context["flash_message"]) {
            // line 22
            echo "            <div class=\"flash-notice\">
                ";
            // line 23
            echo twig_escape_filter($this->env, $context["flash_message"], "html", null, true);
            echo "
            </div>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['flash_message'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 26
        echo "        
        <div id=\"content\">";
        // line 27
        $this->displayBlock('body', $context, $blocks);
        echo "</div>
    </body>
</html>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function block_body($context, array $blocks = [])
    {
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "LiipFunctionalTestBundle::layout.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  81 => 27,  78 => 26,  69 => 23,  66 => 22,  62 => 21,  56 => 17,  51 => 15,  48 => 13,  46 => 12,  34 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("<!DOCTYPE html>
<html lang=\"en\">
    <head>
        <meta charset=\"utf-8\">
        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />
        
        <title>LiipFunctionalTestBundle</title>
    </head>
    
    <body>
        <p id=\"user\">
            {%- if (app.user is null) -%}
                Not logged in.
            {%- else -%}
                Logged in as {{ app.user.username }}.
            {%- endif -%}
        </p>

        <h1>LiipFunctionalTestBundle</h1>
        
        {% for flash_message in app.session.flashbag.get('notice') %}
            <div class=\"flash-notice\">
                {{ flash_message }}
            </div>
        {% endfor %}
        
        <div id=\"content\">{% block body %}{% endblock %}</div>
    </body>
</html>
", "LiipFunctionalTestBundle::layout.html.twig", "/var/www/pk/vendor/liip/functional-test-bundle/Resources/views/layout.html.twig");
    }
}
