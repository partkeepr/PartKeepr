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

/* PartKeeprDoctrineReflectionBundle::model.js.twig */
class __TwigTemplate_fb4c02e97784690389f59b3c9614f12f5cfc8abf79a604200ac7c0a38f5c43b7 extends \Twig\Template
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
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "PartKeeprDoctrineReflectionBundle::model.js.twig"));

        // line 1
        echo "Ext.define('";
        echo twig_escape_filter($this->env, ($context["className"] ?? null), "js", null, true);
        echo "', {
    extend: '";
        // line 2
        echo twig_escape_filter($this->env, ($context["parentClass"] ?? null), "js", null, true);
        echo "',
    alias: 'schema.";
        // line 3
        echo twig_escape_filter($this->env, ($context["className"] ?? null), "js", null, true);
        echo "',

    idProperty: \"@id\",
    fields: [
        ";
        // line 7
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["fields"] ?? null));
        $context['loop'] = [
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        ];
        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
            $length = count($context['_seq']);
            $context['loop']['revindex0'] = $length - 1;
            $context['loop']['revindex'] = $length;
            $context['loop']['length'] = $length;
            $context['loop']['last'] = 1 === $length;
        }
        foreach ($context['_seq'] as $context["_key"] => $context["field"]) {
            // line 8
            echo "        { name: '";
            echo $this->getAttribute($context["field"], "name", []);
            echo "'";
            if ($this->getAttribute($context["field"], "type", [])) {
                echo ", type: '";
                echo twig_escape_filter($this->env, $this->getAttribute($context["field"], "type", []), "js", null, true);
                echo "'";
            }
            if ($this->getAttribute($context["field"], "nullable", [])) {
                echo ", allowNull: true";
            }
            if ( !$this->getAttribute($context["field"], "persist", [])) {
                echo ", persist: false";
            }
            if ($this->getAttribute($context["field"], "validators", [])) {
                echo ", validators: ";
                echo $this->getAttribute($context["field"], "validators", []);
            }
            echo "}";
            if ( !$this->getAttribute($context["loop"], "last", [])) {
                echo ",";
            }
            // line 9
            echo "
        ";
            ++$context['loop']['index0'];
            ++$context['loop']['index'];
            $context['loop']['first'] = false;
            if (isset($context['loop']['length'])) {
                --$context['loop']['revindex0'];
                --$context['loop']['revindex'];
                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['field'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 11
        echo "        ";
        if ((twig_length_filter($this->env, $this->getAttribute(($context["associations"] ?? null), "MANY_TO_ONE", [])) > 0)) {
            // line 12
            echo "            ,
            ";
            // line 13
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["associations"] ?? null), "MANY_TO_ONE", []));
            $context['loop'] = [
              'parent' => $context['_parent'],
              'index0' => 0,
              'index'  => 1,
              'first'  => true,
            ];
            if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                $length = count($context['_seq']);
                $context['loop']['revindex0'] = $length - 1;
                $context['loop']['revindex'] = $length;
                $context['loop']['length'] = $length;
                $context['loop']['last'] = 1 === $length;
            }
            foreach ($context['_seq'] as $context["_key"] => $context["association"]) {
                // line 14
                echo "                { name: '";
                echo twig_escape_filter($this->env, $this->getAttribute($context["association"], "name", []), "js", null, true);
                echo "',
                reference: '";
                // line 15
                echo twig_escape_filter($this->env, $this->getAttribute($context["association"], "target", []), "js", null, true);
                echo "',
            allowBlank: ";
                // line 16
                if ($this->getAttribute($context["association"], "nullable", [])) {
                    echo "true";
                } else {
                    echo "false";
                }
                // line 17
                echo "        ";
                if ($this->getAttribute($context["association"], "byReference", [])) {
                    echo ",byReference: true";
                }
                // line 18
                echo "                }";
                if ( !$this->getAttribute($context["loop"], "last", [])) {
                    echo ",";
                }
                // line 19
                echo "
            ";
                ++$context['loop']['index0'];
                ++$context['loop']['index'];
                $context['loop']['first'] = false;
                if (isset($context['loop']['length'])) {
                    --$context['loop']['revindex0'];
                    --$context['loop']['revindex'];
                    $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['association'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 21
            echo "        ";
        }
        // line 22
        echo "        ";
        if ((twig_length_filter($this->env, $this->getAttribute(($context["associations"] ?? null), "ONE_TO_ONE", [])) > 0)) {
            // line 23
            echo "            ,
            ";
            // line 24
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["associations"] ?? null), "ONE_TO_ONE", []));
            $context['loop'] = [
              'parent' => $context['_parent'],
              'index0' => 0,
              'index'  => 1,
              'first'  => true,
            ];
            if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                $length = count($context['_seq']);
                $context['loop']['revindex0'] = $length - 1;
                $context['loop']['revindex'] = $length;
                $context['loop']['length'] = $length;
                $context['loop']['last'] = 1 === $length;
            }
            foreach ($context['_seq'] as $context["_key"] => $context["association"]) {
                // line 25
                echo "                { name: '";
                echo twig_escape_filter($this->env, $this->getAttribute($context["association"], "name", []), "js", null, true);
                echo "',
                reference: '";
                // line 26
                echo twig_escape_filter($this->env, $this->getAttribute($context["association"], "target", []), "js", null, true);
                echo "'
                }";
                // line 27
                if ( !$this->getAttribute($context["loop"], "last", [])) {
                    echo ",";
                }
                // line 28
                echo "
            ";
                ++$context['loop']['index0'];
                ++$context['loop']['index'];
                $context['loop']['first'] = false;
                if (isset($context['loop']['length'])) {
                    --$context['loop']['revindex0'];
                    --$context['loop']['revindex'];
                    $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['association'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 30
            echo "        ";
        }
        // line 31
        echo "
    ],

    ";
        // line 34
        if ((twig_length_filter($this->env, $this->getAttribute(($context["associations"] ?? null), "ONE_TO_MANY", [])) > 0)) {
            // line 35
            echo "    hasMany: [
    ";
            // line 36
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["associations"] ?? null), "ONE_TO_MANY", []));
            $context['loop'] = [
              'parent' => $context['_parent'],
              'index0' => 0,
              'index'  => 1,
              'first'  => true,
            ];
            if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                $length = count($context['_seq']);
                $context['loop']['revindex0'] = $length - 1;
                $context['loop']['revindex'] = $length;
                $context['loop']['length'] = $length;
                $context['loop']['last'] = 1 === $length;
            }
            foreach ($context['_seq'] as $context["_key"] => $context["association"]) {
                // line 37
                echo "        {
        name: '";
                // line 38
                echo twig_escape_filter($this->env, $this->getAttribute($context["association"], "name", []), "js", null, true);
                echo "',
        associationKey: '";
                // line 39
                echo twig_escape_filter($this->env, $this->getAttribute($context["association"], "name", []), "js", null, true);
                echo "',
        model: '";
                // line 40
                echo twig_escape_filter($this->env, $this->getAttribute($context["association"], "target", []), "js", null, true);
                echo "'
        }";
                // line 41
                if ( !$this->getAttribute($context["loop"], "last", [])) {
                    echo ",";
                }
                // line 42
                echo "
    ";
                ++$context['loop']['index0'];
                ++$context['loop']['index'];
                $context['loop']['first'] = false;
                if (isset($context['loop']['length'])) {
                    --$context['loop']['revindex0'];
                    --$context['loop']['revindex'];
                    $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['association'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 44
            echo "    ],
    ";
        }
        // line 46
        echo "
    ";
        // line 47
        if ((twig_length_filter($this->env, $this->getAttribute(($context["associations"] ?? null), "MANY_TO_MANY", [])) > 0)) {
            // line 48
            echo "    manyToMany: {
    ";
            // line 49
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["associations"] ?? null), "MANY_TO_MANY", []));
            $context['loop'] = [
              'parent' => $context['_parent'],
              'index0' => 0,
              'index'  => 1,
              'first'  => true,
            ];
            if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                $length = count($context['_seq']);
                $context['loop']['revindex0'] = $length - 1;
                $context['loop']['revindex'] = $length;
                $context['loop']['length'] = $length;
                $context['loop']['last'] = 1 === $length;
            }
            foreach ($context['_seq'] as $context["_key"] => $context["association"]) {
                // line 50
                echo "        ";
                echo twig_escape_filter($this->env, $this->getAttribute($context["association"], "name", []), "js", null, true);
                echo ": {
            type: '";
                // line 51
                echo twig_escape_filter($this->env, $this->getAttribute($context["association"], "target", []), "js", null, true);
                echo "',
            role: '";
                // line 52
                echo twig_escape_filter($this->env, $this->getAttribute($context["association"], "name", []), "js", null, true);
                echo "',
            field: '@id',
            right: true
        } ";
                // line 55
                if ( !$this->getAttribute($context["loop"], "last", [])) {
                    echo ",";
                }
                // line 56
                echo "    ";
                ++$context['loop']['index0'];
                ++$context['loop']['index'];
                $context['loop']['first'] = false;
                if (isset($context['loop']['length'])) {
                    --$context['loop']['revindex0'];
                    --$context['loop']['revindex'];
                    $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['association'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 57
            echo "    },
    ";
        }
        // line 59
        echo "
    proxy: {
        type: \"Hydra\",
        url: '";
        // line 62
        if ((($context["uri"] ?? null) == "")) {
            echo "undefined:";
            echo twig_escape_filter($this->env, ($context["className"] ?? null), "js", null, true);
        } else {
            echo ($context["uri"] ?? null);
        }
        echo "'
        ";
        // line 63
        if ((($context["ignoreIds"] ?? null) == true)) {
            // line 64
            echo "        , ignoreIds: true
        ";
        }
        // line 66
        echo "    }
});

PartKeepr.Data.Store.ModelStore.addModel('";
        // line 69
        echo twig_escape_filter($this->env, ($context["className"] ?? null), "js", null, true);
        echo "', '');
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "PartKeeprDoctrineReflectionBundle::model.js.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  376 => 69,  371 => 66,  367 => 64,  365 => 63,  356 => 62,  351 => 59,  347 => 57,  333 => 56,  329 => 55,  323 => 52,  319 => 51,  314 => 50,  297 => 49,  294 => 48,  292 => 47,  289 => 46,  285 => 44,  270 => 42,  266 => 41,  262 => 40,  258 => 39,  254 => 38,  251 => 37,  234 => 36,  231 => 35,  229 => 34,  224 => 31,  221 => 30,  206 => 28,  202 => 27,  198 => 26,  193 => 25,  176 => 24,  173 => 23,  170 => 22,  167 => 21,  152 => 19,  147 => 18,  142 => 17,  136 => 16,  132 => 15,  127 => 14,  110 => 13,  107 => 12,  104 => 11,  89 => 9,  66 => 8,  49 => 7,  42 => 3,  38 => 2,  33 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("Ext.define('{{ className }}', {
    extend: '{{ parentClass }}',
    alias: 'schema.{{ className }}',

    idProperty: \"@id\",
    fields: [
        {% for field in fields %}
        { name: '{{ field.name|raw }}'{% if field.type%}, type: '{{ field.type }}'{% endif %}{% if field.nullable%}, allowNull: true{% endif %}{% if not field.persist %}, persist: false{% endif %}{% if field.validators %}, validators: {{ field.validators|raw }}{% endif %}}{% if not loop.last %},{% endif %}

        {% endfor %}
        {% if associations.MANY_TO_ONE|length > 0 %}
            ,
            {% for association in associations.MANY_TO_ONE %}
                { name: '{{ association.name }}',
                reference: '{{ association.target }}',
            allowBlank: {% if association.nullable %}true{% else %}false{% endif %}
        {% if association.byReference %},byReference: true{% endif %}
                }{% if not loop.last %},{% endif %}

            {% endfor %}
        {% endif %}
        {% if associations.ONE_TO_ONE|length > 0 %}
            ,
            {% for association in associations.ONE_TO_ONE %}
                { name: '{{ association.name }}',
                reference: '{{ association.target }}'
                }{% if not loop.last %},{% endif %}

            {% endfor %}
        {% endif %}

    ],

    {% if associations.ONE_TO_MANY|length > 0 %}
    hasMany: [
    {% for association in associations.ONE_TO_MANY %}
        {
        name: '{{ association.name }}',
        associationKey: '{{ association.name }}',
        model: '{{ association.target }}'
        }{% if not loop.last %},{% endif %}

    {% endfor %}
    ],
    {% endif %}

    {% if associations.MANY_TO_MANY|length > 0 %}
    manyToMany: {
    {% for association in associations.MANY_TO_MANY %}
        {{ association.name }}: {
            type: '{{ association.target }}',
            role: '{{ association.name }}',
            field: '@id',
            right: true
        } {% if not loop.last %},{% endif %}
    {% endfor %}
    },
    {% endif %}

    proxy: {
        type: \"Hydra\",
        url: '{% if uri == \"\" %}undefined:{{ className }}{% else %}{{ uri|raw }}{% endif %}'
        {% if ignoreIds == true %}
        , ignoreIds: true
        {% endif %}
    }
});

PartKeepr.Data.Store.ModelStore.addModel('{{ className }}', '');
", "PartKeeprDoctrineReflectionBundle::model.js.twig", "/var/www/pk/src/PartKeepr/DoctrineReflectionBundle/Resources/views/model.js.twig");
    }
}
