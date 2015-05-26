PartKeeprRestBundle
====================

This bundle extends the FOSRestBundle so that it can read annotations of the parent class. That way, PartKeepr can
have one superclass with commonly used parameters (like start and limit for pagination) without the need of re-defining
common parameters for each child class.

The current limitation is that it currently only works for direct descendants and not for the whole class hierarchy.