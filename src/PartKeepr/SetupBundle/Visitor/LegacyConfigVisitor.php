<?php

namespace PartKeepr\SetupBundle\Visitor;

class LegacyConfigVisitor extends \PHPParser_NodeVisitorAbstract
{
    private static $configValues = [];

    public function enterNode(\PHPParser_Node $node)
    {
        if ($node instanceof \PHPParser_Node_Expr_StaticCall) {
            if ($node->class->parts[0] == 'Configuration' && $node->name == 'setOption') {
                if (array_key_exists(0, $node->args) && array_key_exists(1, $node->args)) {
                    if ($node->args[1]->value instanceof \PHPParser_Node_Scalar_String) {
                        self::$configValues[$node->args[0]->value->value] = $node->args[1]->value->value;
                    } elseif ($node->args[1]->value instanceof \PHPParser_Node_Scalar_LNumber) {
                        self::$configValues[$node->args[0]->value->value] = $node->args[1]->value->value;
                    } elseif ($node->args[1]->value instanceof \PHPParser_Node_Expr_ConstFetch) {
                        self::$configValues[$node->args[0]->value->value] = boolval($node->args[1]->value->name->parts[0]);
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
