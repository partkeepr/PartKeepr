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

/* WebProfilerBundle:Collector:logger.html.twig */
class __TwigTemplate_cb885c3574d37a05305774437b73879ce2dd8627085058eb29d8cc72ac5a2f0b extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->blocks = [
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
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "WebProfilerBundle:Collector:logger.html.twig"));

        // line 3
        $context["helper"] = $this;
        // line 1
        $this->parent = $this->loadTemplate("@WebProfiler/Profiler/layout.html.twig", "WebProfilerBundle:Collector:logger.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 5
    public function block_toolbar($context, array $blocks = [])
    {
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "toolbar"));

        // line 6
        echo "    ";
        if ((($this->getAttribute(($context["collector"] ?? null), "counterrors", []) || $this->getAttribute(($context["collector"] ?? null), "countdeprecations", [])) || $this->getAttribute(($context["collector"] ?? null), "countscreams", []))) {
            // line 7
            echo "        ";
            ob_start();
            // line 8
            echo "            ";
            $context["status_color"] = (($this->getAttribute(($context["collector"] ?? null), "counterrors", [])) ? ("red") : ((($this->getAttribute(($context["collector"] ?? null), "countdeprecations", [])) ? ("yellow") : (""))));
            // line 9
            echo "            ";
            $context["error_count"] = (($this->getAttribute(($context["collector"] ?? null), "counterrors", []) + $this->getAttribute(($context["collector"] ?? null), "countdeprecations", [])) + $this->getAttribute(($context["collector"] ?? null), "countscreams", []));
            // line 10
            echo "            ";
            echo twig_include($this->env, $context, "@WebProfiler/Icon/logger.svg");
            echo "
            <span class=\"sf-toolbar-value\">";
            // line 11
            echo twig_escape_filter($this->env, ($context["error_count"] ?? null), "html", null, true);
            echo "</span>
        ";
            $context["icon"] = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
            // line 13
            echo "
        ";
            // line 14
            ob_start();
            // line 15
            echo "            <div class=\"sf-toolbar-info-piece\">
                <b>Errors</b>
                <span class=\"sf-toolbar-status sf-toolbar-status-";
            // line 17
            echo (($this->getAttribute(($context["collector"] ?? null), "counterrors", [])) ? ("red") : (""));
            echo "\">";
            echo twig_escape_filter($this->env, (($this->getAttribute(($context["collector"] ?? null), "counterrors", [], "any", true, true)) ? (_twig_default_filter($this->getAttribute(($context["collector"] ?? null), "counterrors", []), 0)) : (0)), "html", null, true);
            echo "</span>
            </div>

            <div class=\"sf-toolbar-info-piece\">
                <b>Deprecated Calls</b>
                <span class=\"sf-toolbar-status sf-toolbar-status-";
            // line 22
            echo (($this->getAttribute(($context["collector"] ?? null), "countdeprecations", [])) ? ("yellow") : (""));
            echo "\">";
            echo twig_escape_filter($this->env, (($this->getAttribute(($context["collector"] ?? null), "countdeprecations", [], "any", true, true)) ? (_twig_default_filter($this->getAttribute(($context["collector"] ?? null), "countdeprecations", []), 0)) : (0)), "html", null, true);
            echo "</span>
            </div>

            <div class=\"sf-toolbar-info-piece\">
                <b>Silenced Errors</b>
                <span class=\"sf-toolbar-status\">";
            // line 27
            echo twig_escape_filter($this->env, (($this->getAttribute(($context["collector"] ?? null), "countscreams", [], "any", true, true)) ? (_twig_default_filter($this->getAttribute(($context["collector"] ?? null), "countscreams", []), 0)) : (0)), "html", null, true);
            echo "</span>
            </div>
        ";
            $context["text"] = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
            // line 30
            echo "
        ";
            // line 31
            echo twig_include($this->env, $context, "@WebProfiler/Profiler/toolbar_item.html.twig", ["link" => ($context["profiler_url"] ?? null), "status" => ($context["status_color"] ?? null)]);
            echo "
    ";
        }
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 35
    public function block_menu($context, array $blocks = [])
    {
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "menu"));

        // line 36
        echo "    <span class=\"label label-status-";
        echo (($this->getAttribute(($context["collector"] ?? null), "counterrors", [])) ? ("error") : ((($this->getAttribute(($context["collector"] ?? null), "countdeprecations", [])) ? ("warning") : (""))));
        echo " ";
        echo ((twig_test_empty($this->getAttribute(($context["collector"] ?? null), "logs", []))) ? ("disabled") : (""));
        echo "\">
        <span class=\"icon\">";
        // line 37
        echo twig_include($this->env, $context, "@WebProfiler/Icon/logger.svg");
        echo "</span>
        <strong>Logs</strong>
        ";
        // line 39
        if (($this->getAttribute(($context["collector"] ?? null), "counterrors", []) || $this->getAttribute(($context["collector"] ?? null), "countdeprecations", []))) {
            // line 40
            echo "            <span class=\"count\">
                <span>";
            // line 41
            echo twig_escape_filter($this->env, (($this->getAttribute(($context["collector"] ?? null), "counterrors", [])) ? ($this->getAttribute(($context["collector"] ?? null), "counterrors", [])) : ($this->getAttribute(($context["collector"] ?? null), "countdeprecations", []))), "html", null, true);
            echo "</span>
            </span>
        ";
        }
        // line 44
        echo "    </span>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 47
    public function block_panel($context, array $blocks = [])
    {
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "panel"));

        // line 48
        echo "    <h2>Log Messages</h2>

    ";
        // line 50
        if (twig_test_empty($this->getAttribute(($context["collector"] ?? null), "logs", []))) {
            // line 51
            echo "        <div class=\"empty\">
            <p>No log messages available.</p>
        </div>
    ";
        } else {
            // line 55
            echo "        ";
            // line 56
            echo "        ";
            list($context["deprecation_logs"], $context["debug_logs"], $context["info_and_error_logs"], $context["silenced_logs"]) =             [[], [], [], []];
            // line 57
            echo "        ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["collector"] ?? null), "logs", []));
            foreach ($context['_seq'] as $context["_key"] => $context["log"]) {
                // line 58
                echo "            ";
                if ((($this->getAttribute($this->getAttribute($context["log"], "context", [], "any", false, true), "level", [], "any", true, true) && $this->getAttribute($this->getAttribute($context["log"], "context", [], "any", false, true), "type", [], "any", true, true)) && twig_in_filter($this->getAttribute($this->getAttribute($context["log"], "context", []), "type", []), [0 => twig_constant("E_DEPRECATED"), 1 => twig_constant("E_USER_DEPRECATED")]))) {
                    // line 59
                    echo "                ";
                    $context["deprecation_logs"] = twig_array_merge(($context["deprecation_logs"] ?? null), [0 => $context["log"]]);
                    // line 60
                    echo "            ";
                } elseif (($this->getAttribute($this->getAttribute($context["log"], "context", [], "any", false, true), "scream", [], "any", true, true) && ($this->getAttribute($this->getAttribute($context["log"], "context", []), "scream", []) == true))) {
                    // line 61
                    echo "                ";
                    $context["silenced_logs"] = twig_array_merge(($context["silenced_logs"] ?? null), [0 => $context["log"]]);
                    // line 62
                    echo "            ";
                } elseif (($this->getAttribute($context["log"], "priorityName", []) == "DEBUG")) {
                    // line 63
                    echo "                ";
                    $context["debug_logs"] = twig_array_merge(($context["debug_logs"] ?? null), [0 => $context["log"]]);
                    // line 64
                    echo "            ";
                } else {
                    // line 65
                    echo "                ";
                    $context["info_and_error_logs"] = twig_array_merge(($context["info_and_error_logs"] ?? null), [0 => $context["log"]]);
                    // line 66
                    echo "            ";
                }
                // line 67
                echo "        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['log'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 68
            echo "
        <div class=\"sf-tabs\">
            <div class=\"tab\">
                <h3 class=\"tab-title\">Info. &amp; Errors <span class=\"badge\">";
            // line 71
            echo twig_escape_filter($this->env, twig_length_filter($this->env, ($context["info_and_error_logs"] ?? null)), "html", null, true);
            echo "</span></h3>

                <div class=\"tab-content\">
                    ";
            // line 74
            if (twig_test_empty(($context["info_and_error_logs"] ?? null))) {
                // line 75
                echo "                        <div class=\"empty\">
                            <p>There are no log messages of this level.</p>
                        </div>
                    ";
            } else {
                // line 79
                echo "                        ";
                echo $context["helper"]->getrender_table(($context["info_and_error_logs"] ?? null), true);
                echo "
                    ";
            }
            // line 81
            echo "                </div>
            </div>

            <div class=\"tab\">
                ";
            // line 87
            echo "                <h3 class=\"tab-title\">Deprecations <span class=\"badge\">";
            echo twig_escape_filter($this->env, (($this->getAttribute(($context["collector"] ?? null), "countdeprecations", [], "any", true, true)) ? (_twig_default_filter($this->getAttribute(($context["collector"] ?? null), "countdeprecations", []), 0)) : (0)), "html", null, true);
            echo "</span></h3>

                <div class=\"tab-content\">
                    ";
            // line 90
            if (twig_test_empty(($context["deprecation_logs"] ?? null))) {
                // line 91
                echo "                        <div class=\"empty\">
                            <p>There are no log messages about deprecated features.</p>
                        </div>
                    ";
            } else {
                // line 95
                echo "                        ";
                echo $context["helper"]->getrender_table(($context["deprecation_logs"] ?? null), false, true);
                echo "
                    ";
            }
            // line 97
            echo "                </div>
            </div>

            <div class=\"tab\">
                <h3 class=\"tab-title\">Debug <span class=\"badge\">";
            // line 101
            echo twig_escape_filter($this->env, twig_length_filter($this->env, ($context["debug_logs"] ?? null)), "html", null, true);
            echo "</span></h3>

                <div class=\"tab-content\">
                    ";
            // line 104
            if (twig_test_empty(($context["debug_logs"] ?? null))) {
                // line 105
                echo "                        <div class=\"empty\">
                            <p>There are no log messages of this level.</p>
                        </div>
                    ";
            } else {
                // line 109
                echo "                        ";
                echo $context["helper"]->getrender_table(($context["debug_logs"] ?? null));
                echo "
                    ";
            }
            // line 111
            echo "                </div>
            </div>

            <div class=\"tab\">
                <h3 class=\"tab-title\">Silenced Errors <span class=\"badge\">";
            // line 115
            echo twig_escape_filter($this->env, (($this->getAttribute(($context["collector"] ?? null), "countscreams", [], "any", true, true)) ? (_twig_default_filter($this->getAttribute(($context["collector"] ?? null), "countscreams", []), 0)) : (0)), "html", null, true);
            echo "</span></h3>

                <div class=\"tab-content\">
                    ";
            // line 118
            if (twig_test_empty(($context["silenced_logs"] ?? null))) {
                // line 119
                echo "                        <div class=\"empty\">
                            <p>There are no log messages of this level.</p>
                        </div>
                    ";
            } else {
                // line 123
                echo "                        ";
                echo $context["helper"]->getrender_table(($context["silenced_logs"] ?? null));
                echo "
                    ";
            }
            // line 125
            echo "                </div>
            </div>

        </div>
    ";
        }
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 132
    public function getrender_table($__logs__ = null, $__show_level__ = false, $__is_deprecation__ = false, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals([
            "logs" => $__logs__,
            "show_level" => $__show_level__,
            "is_deprecation" => $__is_deprecation__,
            "varargs" => $__varargs__,
        ]);

        $blocks = [];

        ob_start();
        try {
            $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
            $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "macro", "render_table"));

            // line 133
            echo "    ";
            $context["helper"] = $this;
            // line 134
            echo "    ";
            $context["channel_is_defined"] = $this->getAttribute(twig_first($this->env, ($context["logs"] ?? null)), "channel", [], "any", true, true);
            // line 135
            echo "
    <table class=\"logs\">
        <thead>
            <tr>
                <th>";
            // line 139
            echo ((($context["show_level"] ?? null)) ? ("Level") : ("Time"));
            echo "</th>
                ";
            // line 140
            if (($context["channel_is_defined"] ?? null)) {
                echo "<th>Channel</th>";
            }
            // line 141
            echo "                <th>Message</th>
            </tr>
        </thead>

        <tbody>
            ";
            // line 146
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["logs"] ?? null));
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
            foreach ($context['_seq'] as $context["_key"] => $context["log"]) {
                // line 147
                echo "                ";
                $context["css_class"] = ((($context["is_deprecation"] ?? null)) ? ("") : (((twig_in_filter($this->getAttribute(                // line 148
$context["log"], "priorityName", []), [0 => "CRITICAL", 1 => "ERROR", 2 => "ALERT", 3 => "EMERGENCY"])) ? ("status-error") : (((twig_in_filter($this->getAttribute(                // line 149
$context["log"], "priorityName", []), [0 => "NOTICE", 1 => "WARNING"])) ? ("status-warning") : (""))))));
                // line 151
                echo "                <tr class=\"";
                echo twig_escape_filter($this->env, ($context["css_class"] ?? null), "html", null, true);
                echo "\">
                    <td class=\"font-normal text-small\">
                        ";
                // line 153
                if (($context["show_level"] ?? null)) {
                    // line 154
                    echo "                            <span class=\"colored text-bold nowrap\">";
                    echo twig_escape_filter($this->env, $this->getAttribute($context["log"], "priorityName", []), "html", null, true);
                    echo "</span>
                        ";
                }
                // line 156
                echo "                        <span class=\"text-muted nowrap newline\">";
                echo twig_escape_filter($this->env, twig_date_format_filter($this->env, $this->getAttribute($context["log"], "timestamp", []), "H:i:s"), "html", null, true);
                echo "</span>
                    </td>

                    ";
                // line 159
                if (($context["channel_is_defined"] ?? null)) {
                    // line 160
                    echo "                        <td class=\"font-normal text-small text-bold nowrap\">";
                    echo twig_escape_filter($this->env, $this->getAttribute($context["log"], "channel", []), "html", null, true);
                    echo "</td>
                    ";
                }
                // line 162
                echo "
                    <td class=\"font-normal\">";
                // line 163
                echo $context["helper"]->getrender_log_message($this->getAttribute($context["loop"], "index", []), $context["log"], ($context["is_deprecation"] ?? null));
                echo "</td>
                </tr>
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
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['log'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 166
            echo "        </tbody>
    </table>
";
            
            $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        } catch (\Exception $e) {
            ob_end_clean();

            throw $e;
        } catch (\Throwable $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
    }

    // line 170
    public function getrender_log_message($__log_index__ = null, $__log__ = null, $__is_deprecation__ = false, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals([
            "log_index" => $__log_index__,
            "log" => $__log__,
            "is_deprecation" => $__is_deprecation__,
            "varargs" => $__varargs__,
        ]);

        $blocks = [];

        ob_start();
        try {
            $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
            $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "macro", "render_log_message"));

            // line 171
            echo "    ";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["log"] ?? null), "message", []), "html", null, true);
            echo "

    ";
            // line 173
            if (($context["is_deprecation"] ?? null)) {
                // line 174
                echo "        ";
                $context["stack"] = (($this->getAttribute($this->getAttribute(($context["log"] ?? null), "context", [], "any", false, true), "stack", [], "any", true, true)) ? (_twig_default_filter($this->getAttribute($this->getAttribute(($context["log"] ?? null), "context", [], "any", false, true), "stack", []), [])) : ([]));
                // line 175
                echo "        ";
                $context["id"] = ("sf-call-stack-" . ($context["log_index"] ?? null));
                // line 176
                echo "
        ";
                // line 177
                if ($this->getAttribute($this->getAttribute(($context["log"] ?? null), "context", [], "any", false, true), "errorCount", [], "any", true, true)) {
                    // line 178
                    echo "            <span class=\"text-small text-bold\">(";
                    echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["log"] ?? null), "context", []), "errorCount", []), "html", null, true);
                    echo " times)</span>
        ";
                }
                // line 180
                echo "
        ";
                // line 181
                if (($context["stack"] ?? null)) {
                    // line 182
                    echo "            <button class=\"btn-link text-small sf-toggle\" data-toggle-selector=\"#";
                    echo twig_escape_filter($this->env, ($context["id"] ?? null), "html", null, true);
                    echo "\" data-toggle-alt-content=\"Hide stack trace\">Show stack trace</button>
        ";
                }
                // line 184
                echo "
        ";
                // line 185
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["stack"] ?? null));
                foreach ($context['_seq'] as $context["index"] => $context["call"]) {
                    if (($context["index"] > 1)) {
                        // line 186
                        echo "            ";
                        if (($context["index"] == 2)) {
                            // line 187
                            echo "                <ul class=\"sf-call-stack hidden\" id=\"";
                            echo twig_escape_filter($this->env, ($context["id"] ?? null), "html", null, true);
                            echo "\">
            ";
                        }
                        // line 189
                        echo "
            ";
                        // line 190
                        if ($this->getAttribute($context["call"], "class", [], "any", true, true)) {
                            // line 191
                            echo "                ";
                            $context["from"] = (($this->env->getExtension('Symfony\Bridge\Twig\Extension\CodeExtension')->abbrClass($this->getAttribute($context["call"], "class", [])) . "::") . $this->env->getExtension('Symfony\Bridge\Twig\Extension\CodeExtension')->abbrMethod($this->getAttribute($context["call"], "function", [])));
                            // line 192
                            echo "            ";
                        } elseif ($this->getAttribute($context["call"], "function", [], "any", true, true)) {
                            // line 193
                            echo "                ";
                            $context["from"] = $this->env->getExtension('Symfony\Bridge\Twig\Extension\CodeExtension')->abbrMethod($this->getAttribute($context["call"], "function", []));
                            // line 194
                            echo "            ";
                        } elseif ($this->getAttribute($context["call"], "file", [], "any", true, true)) {
                            // line 195
                            echo "                ";
                            $context["from"] = $this->getAttribute($context["call"], "file", []);
                            // line 196
                            echo "            ";
                        } else {
                            // line 197
                            echo "                ";
                            $context["from"] = "-";
                            // line 198
                            echo "            ";
                        }
                        // line 199
                        echo "
            ";
                        // line 200
                        $context["file_name"] = ((($this->getAttribute($context["call"], "file", [], "any", true, true) && $this->getAttribute($context["call"], "line", [], "any", true, true))) ? (twig_last($this->env, twig_split_filter($this->env, twig_replace_filter($this->getAttribute($context["call"], "file", []), ["\\" => "/"]), "/"))) : (""));
                        // line 201
                        echo "
            <li>
                ";
                        // line 203
                        echo ($context["from"] ?? null);
                        echo "
                ";
                        // line 204
                        if (($context["file_name"] ?? null)) {
                            // line 205
                            echo "                    <span class=\"text-small\">(called from ";
                            echo $this->env->getExtension('Symfony\Bridge\Twig\Extension\CodeExtension')->formatFile($this->getAttribute($context["call"], "file", []), $this->getAttribute($context["call"], "line", []), ($context["file_name"] ?? null));
                            echo ")</span>
                ";
                        }
                        // line 207
                        echo "            </li>

            ";
                        // line 209
                        if (($context["index"] == (twig_length_filter($this->env, ($context["stack"] ?? null)) - 1))) {
                            // line 210
                            echo "                </ul>
            ";
                        }
                        // line 212
                        echo "        ";
                    }
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['index'], $context['call'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 213
                echo "    ";
            } else {
                // line 214
                echo "        ";
                if (($this->getAttribute(($context["log"] ?? null), "context", [], "any", true, true) &&  !twig_test_empty($this->getAttribute(($context["log"] ?? null), "context", [])))) {
                    // line 215
                    echo "            <span class=\"metadata\">
                <strong>Context</strong>: ";
                    // line 216
                    echo twig_escape_filter($this->env, twig_replace_filter(twig_jsonencode_filter($this->getAttribute(($context["log"] ?? null), "context", []), (64 | 256)), ["{\"" => "{ \"", "\"}" => "\" }", "\":{" => "\": {", "\":\"" => "\": \"", "\",\"" => "\", \""]), "html", null, true);
                    // line 218
                    echo "
            </span>
        ";
                }
                // line 221
                echo "    ";
            }
            
            $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        } catch (\Exception $e) {
            ob_end_clean();

            throw $e;
        } catch (\Throwable $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
    }

    public function getTemplateName()
    {
        return "WebProfilerBundle:Collector:logger.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  628 => 221,  623 => 218,  621 => 216,  618 => 215,  615 => 214,  612 => 213,  605 => 212,  601 => 210,  599 => 209,  595 => 207,  589 => 205,  587 => 204,  583 => 203,  579 => 201,  577 => 200,  574 => 199,  571 => 198,  568 => 197,  565 => 196,  562 => 195,  559 => 194,  556 => 193,  553 => 192,  550 => 191,  548 => 190,  545 => 189,  539 => 187,  536 => 186,  531 => 185,  528 => 184,  522 => 182,  520 => 181,  517 => 180,  511 => 178,  509 => 177,  506 => 176,  503 => 175,  500 => 174,  498 => 173,  492 => 171,  475 => 170,  455 => 166,  438 => 163,  435 => 162,  429 => 160,  427 => 159,  420 => 156,  414 => 154,  412 => 153,  406 => 151,  404 => 149,  403 => 148,  401 => 147,  384 => 146,  377 => 141,  373 => 140,  369 => 139,  363 => 135,  360 => 134,  357 => 133,  340 => 132,  328 => 125,  322 => 123,  316 => 119,  314 => 118,  308 => 115,  302 => 111,  296 => 109,  290 => 105,  288 => 104,  282 => 101,  276 => 97,  270 => 95,  264 => 91,  262 => 90,  255 => 87,  249 => 81,  243 => 79,  237 => 75,  235 => 74,  229 => 71,  224 => 68,  218 => 67,  215 => 66,  212 => 65,  209 => 64,  206 => 63,  203 => 62,  200 => 61,  197 => 60,  194 => 59,  191 => 58,  186 => 57,  183 => 56,  181 => 55,  175 => 51,  173 => 50,  169 => 48,  163 => 47,  155 => 44,  149 => 41,  146 => 40,  144 => 39,  139 => 37,  132 => 36,  126 => 35,  116 => 31,  113 => 30,  107 => 27,  97 => 22,  87 => 17,  83 => 15,  81 => 14,  78 => 13,  73 => 11,  68 => 10,  65 => 9,  62 => 8,  59 => 7,  56 => 6,  50 => 5,  42 => 1,  40 => 3,  31 => 1,);
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

{% import _self as helper %}

{% block toolbar %}
    {% if collector.counterrors or collector.countdeprecations or collector.countscreams %}
        {% set icon %}
            {% set status_color = collector.counterrors ? 'red' : collector.countdeprecations ? 'yellow' : '' %}
            {% set error_count = collector.counterrors + collector.countdeprecations + collector.countscreams %}
            {{ include('@WebProfiler/Icon/logger.svg') }}
            <span class=\"sf-toolbar-value\">{{ error_count }}</span>
        {% endset %}

        {% set text %}
            <div class=\"sf-toolbar-info-piece\">
                <b>Errors</b>
                <span class=\"sf-toolbar-status sf-toolbar-status-{{ collector.counterrors ? 'red' }}\">{{ collector.counterrors|default(0) }}</span>
            </div>

            <div class=\"sf-toolbar-info-piece\">
                <b>Deprecated Calls</b>
                <span class=\"sf-toolbar-status sf-toolbar-status-{{ collector.countdeprecations ? 'yellow' }}\">{{ collector.countdeprecations|default(0) }}</span>
            </div>

            <div class=\"sf-toolbar-info-piece\">
                <b>Silenced Errors</b>
                <span class=\"sf-toolbar-status\">{{ collector.countscreams|default(0) }}</span>
            </div>
        {% endset %}

        {{ include('@WebProfiler/Profiler/toolbar_item.html.twig', { link: profiler_url, status: status_color }) }}
    {% endif %}
{% endblock %}

{% block menu %}
    <span class=\"label label-status-{{ collector.counterrors ? 'error' : collector.countdeprecations ? 'warning' }} {{ collector.logs is empty ? 'disabled' }}\">
        <span class=\"icon\">{{ include('@WebProfiler/Icon/logger.svg') }}</span>
        <strong>Logs</strong>
        {% if collector.counterrors or collector.countdeprecations %}
            <span class=\"count\">
                <span>{{ collector.counterrors ?: collector.countdeprecations }}</span>
            </span>
        {% endif %}
    </span>
{% endblock %}

{% block panel %}
    <h2>Log Messages</h2>

    {% if collector.logs is empty %}
        <div class=\"empty\">
            <p>No log messages available.</p>
        </div>
    {% else %}
        {# sort collected logs in groups #}
        {% set deprecation_logs, debug_logs, info_and_error_logs, silenced_logs = [], [], [], [] %}
        {% for log in collector.logs %}
            {% if log.context.level is defined and log.context.type is defined and log.context.type in [constant('E_DEPRECATED'), constant('E_USER_DEPRECATED')] %}
                {% set deprecation_logs = deprecation_logs|merge([log]) %}
            {% elseif log.context.scream is defined and log.context.scream == true  %}
                {% set silenced_logs = silenced_logs|merge([log]) %}
            {% elseif log.priorityName == 'DEBUG' %}
                {% set debug_logs = debug_logs|merge([log]) %}
            {% else %}
                {% set info_and_error_logs = info_and_error_logs|merge([log]) %}
            {% endif %}
        {% endfor %}

        <div class=\"sf-tabs\">
            <div class=\"tab\">
                <h3 class=\"tab-title\">Info. &amp; Errors <span class=\"badge\">{{ info_and_error_logs|length }}</span></h3>

                <div class=\"tab-content\">
                    {% if info_and_error_logs is empty %}
                        <div class=\"empty\">
                            <p>There are no log messages of this level.</p>
                        </div>
                    {% else %}
                        {{ helper.render_table(info_and_error_logs, true) }}
                    {% endif %}
                </div>
            </div>

            <div class=\"tab\">
                {# 'deprecation_logs|length' is not used because deprecations are
                now grouped and the group count doesn't match the message count #}
                <h3 class=\"tab-title\">Deprecations <span class=\"badge\">{{ collector.countdeprecations|default(0) }}</span></h3>

                <div class=\"tab-content\">
                    {% if deprecation_logs is empty %}
                        <div class=\"empty\">
                            <p>There are no log messages about deprecated features.</p>
                        </div>
                    {% else %}
                        {{ helper.render_table(deprecation_logs, false, true) }}
                    {% endif %}
                </div>
            </div>

            <div class=\"tab\">
                <h3 class=\"tab-title\">Debug <span class=\"badge\">{{ debug_logs|length }}</span></h3>

                <div class=\"tab-content\">
                    {% if debug_logs is empty %}
                        <div class=\"empty\">
                            <p>There are no log messages of this level.</p>
                        </div>
                    {% else %}
                        {{ helper.render_table(debug_logs) }}
                    {% endif %}
                </div>
            </div>

            <div class=\"tab\">
                <h3 class=\"tab-title\">Silenced Errors <span class=\"badge\">{{ collector.countscreams|default(0) }}</span></h3>

                <div class=\"tab-content\">
                    {% if silenced_logs is empty %}
                        <div class=\"empty\">
                            <p>There are no log messages of this level.</p>
                        </div>
                    {% else %}
                        {{ helper.render_table(silenced_logs) }}
                    {% endif %}
                </div>
            </div>

        </div>
    {% endif %}
{% endblock %}

{% macro render_table(logs, show_level = false, is_deprecation = false) %}
    {% import _self as helper %}
    {% set channel_is_defined = (logs|first).channel is defined %}

    <table class=\"logs\">
        <thead>
            <tr>
                <th>{{ show_level ? 'Level' : 'Time' }}</th>
                {% if channel_is_defined %}<th>Channel</th>{% endif %}
                <th>Message</th>
            </tr>
        </thead>

        <tbody>
            {% for log in logs %}
                {% set css_class = is_deprecation ? ''
                    : log.priorityName in ['CRITICAL', 'ERROR', 'ALERT', 'EMERGENCY'] ? 'status-error'
                    : log.priorityName in ['NOTICE', 'WARNING'] ? 'status-warning'
                %}
                <tr class=\"{{ css_class }}\">
                    <td class=\"font-normal text-small\">
                        {% if show_level %}
                            <span class=\"colored text-bold nowrap\">{{ log.priorityName }}</span>
                        {% endif %}
                        <span class=\"text-muted nowrap newline\">{{ log.timestamp|date('H:i:s') }}</span>
                    </td>

                    {% if channel_is_defined %}
                        <td class=\"font-normal text-small text-bold nowrap\">{{ log.channel }}</td>
                    {% endif %}

                    <td class=\"font-normal\">{{ helper.render_log_message(loop.index, log, is_deprecation) }}</td>
                </tr>
            {% endfor %}
        </tbody>
    </table>
{% endmacro %}

{% macro render_log_message(log_index, log, is_deprecation = false) %}
    {{ log.message }}

    {% if is_deprecation %}
        {% set stack = log.context.stack|default([]) %}
        {% set id = 'sf-call-stack-' ~ log_index %}

        {% if log.context.errorCount is defined %}
            <span class=\"text-small text-bold\">({{ log.context.errorCount }} times)</span>
        {% endif %}

        {% if stack %}
            <button class=\"btn-link text-small sf-toggle\" data-toggle-selector=\"#{{ id }}\" data-toggle-alt-content=\"Hide stack trace\">Show stack trace</button>
        {% endif %}

        {% for index, call in stack if index > 1 %}
            {% if index == 2 %}
                <ul class=\"sf-call-stack hidden\" id=\"{{ id }}\">
            {% endif %}

            {% if call.class is defined %}
                {% set from = call.class|abbr_class ~ '::' ~ call.function|abbr_method() %}
            {% elseif call.function is defined %}
                {% set from = call.function|abbr_method %}
            {% elseif call.file is defined %}
                {% set from = call.file %}
            {% else %}
                {% set from = '-' %}
            {% endif %}

            {% set file_name = (call.file is defined and call.line is defined) ? call.file|replace({'\\\\': '/'})|split('/')|last %}

            <li>
                {{ from|raw }}
                {% if file_name %}
                    <span class=\"text-small\">(called from {{ call.file|format_file(call.line, file_name)|raw }})</span>
                {% endif %}
            </li>

            {% if index == stack|length - 1 %}
                </ul>
            {% endif %}
        {% endfor %}
    {% else %}
        {% if log.context is defined and log.context is not empty %}
            <span class=\"metadata\">
                <strong>Context</strong>: {{ log.context|json_encode(64 b-or 256)|replace({
                    '{\"' : '{ \"', '\"}' : '\" }', '\":{' : '\": {', '\":\"' : '\": \"', '\",\"' : '\", \"'
                }) }}
            </span>
        {% endif %}
    {% endif %}
{% endmacro %}
", "WebProfilerBundle:Collector:logger.html.twig", "/var/www/pk/vendor/symfony/symfony/src/Symfony/Bundle/WebProfilerBundle/Resources/views/Collector/logger.html.twig");
    }
}
