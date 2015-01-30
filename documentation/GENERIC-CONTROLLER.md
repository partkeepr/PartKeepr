In order to keep implementations small, we need a generic controller mechanism.

This controller is used for lists, and needs to support the following features:

# Getting a list
- Pagination
- Filtering (including joined properties)
- Ordering
- Specifying relations to fetch

## Filtering

Example:

```json
filter=[
{
    "property":"part.manufacturers.manufacturer.url",
    "constraint": "atmel.com",
    "operator": "contains"
},
{
    "property":"@sum(part.stockLevels.stockLevel)",
    "constraint": 100,
    "operator": ">"
}
]
```

## Specifying relations to include in the result set

Example:
fetch=[
{
    "property":"part.manufacturers"
}

##

# Adding an object

# Updating an object

# Partially updating an object

# Removing an object
- Recursive delete with optional preview (=return all entities which would be removed)