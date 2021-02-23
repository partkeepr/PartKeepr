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

/* SpriteGeneratorBundle::sass.html.twig */
class __TwigTemplate_d842a504dc7f4f4a5933c27f572f08e3fb5f63ddb853b65a5798749567004570 extends \Twig\Template
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
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "SpriteGeneratorBundle::sass.html.twig"));

        // line 1
        echo "
.";
        // line 2
        echo twig_escape_filter($this->env, ($context["spriteClass"] ?? null), "html", null, true);
        echo " {
    background: url(";
        // line 3
        echo twig_escape_filter($this->env, ($context["spriteImageName"] ?? null), "html", null, true);
        echo ") no-repeat;
}

";
        // line 6
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["images"] ?? null));
        foreach ($context['_seq'] as $context["key"] => $context["image"]) {
            // line 7
            echo "    .";
            echo twig_escape_filter($this->env, $context["key"], "html", null, true);
            echo " {
        width: ";
            // line 8
            echo twig_escape_filter($this->env, $this->getAttribute($context["image"], "width", []), "html", null, true);
            echo "px;
        height: ";
            // line 9
            echo twig_escape_filter($this->env, $this->getAttribute($context["image"], "height", []), "html", null, true);
            echo "px;
        background-position: -";
            // line 10
            echo twig_escape_filter($this->env, $this->getAttribute($context["image"], "pos_x", []), "html", null, true);
            echo "px -";
            echo twig_escape_filter($this->env, $this->getAttribute($context["image"], "pos_y", []), "html", null, true);
            echo "px;
    }
";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['key'], $context['image'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "SpriteGeneratorBundle::sass.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  63 => 10,  59 => 9,  55 => 8,  50 => 7,  46 => 6,  40 => 3,  36 => 2,  33 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("
.{{ spriteClass }} {
    background: url({{ spriteImageName }}) no-repeat;
}

{% for key, image in images %}
    .{{ key }} {
        width: {{ image.width }}px;
        height: {{ image.height }}px;
        background-position: -{{ image.pos_x }}px -{{ image.pos_y }}px;
    }
{% endfor %}
", "SpriteGeneratorBundle::sass.html.twig", "/var/www/pk/vendor/nfq-alpha/sprite-bundle/src/SpriteGenerator/Resources/views/sass.html.twig");
    }
}
