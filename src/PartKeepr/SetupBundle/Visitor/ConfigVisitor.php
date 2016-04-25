<?php

namespace PartKeepr\SetupBundle\Visitor;

class ConfigVisitor extends \PHPParser_NodeVisitorAbstract
{
    private static $configValues = [];

    public function enterNode(\PHPParser_Node $node)
    {
        if ($node instanceof \PHPParser_Node_Expr_MethodCall) {
            if ($node->var->name == 'container' && $node->name == 'setParameter') {
                if (array_key_exists(0, $node->args) && array_key_exists(1, $node->args)) {
                    if ($node->args[1]->value instanceof \PHPParser_Node_Scalar_String) {
                        self::$configValues[$node->args[0]->value->value] = $node->args[1]->value->value;
                    } elseif ($node->args[1]->value instanceof \PHPParser_Node_Scalar_LNumber) {
                        self::$configValues[$node->args[0]->value->value] = $node->args[1]->value->value;
                    } elseif ($node->args[1]->value instanceof \PHPParser_Node_Expr_ConstFetch) {
                        switch (strtolower($node->args[1]->value->name->parts[0])) {
                            case 'true':
                                $value = true;
                                break;
                            case 'false':
                                $value = false;
                                break;
                            case 'null':
                                $value = null;
                                break;
                        }
                        self::$configValues[$node->args[0]->value->value] = $value;
                    }
                }
            }
        }
    }

    public static function getConfigValues()
    {
        return self::$configValues;
    }
}
