Built-in Helpers:


#if Helper
    Example:
    <div>
    {{#if author}}
    .............
    {{/if}}
    </div>

{
    author: true,
    firstName:"Yehuda",
    lastName:"Katz",
}

You can use the this expression in any context to reference the current context.

You can optionally provide an else section which will display only when the list is empty.

When looping through items in each, you can optionally reference the current loop index via {{@index}}.

Example:
{{#each array}} {{@index}}: {{this}} {{/each}}






#unless Helper:
You can use the unless helper as the inverse of the if helper. Its block will be rendered if the expression returns a falsy value.


#each Helper:
You can iterate over a list using the built-in each helper. Inside the block, you can use this to reference the element being iterated over.







#Handlebars Metadata:

Handlebars has a data channel feature that propagates data through all scopes, including helpers and partials. Values in the data channel can be accessed via the {{@variable}} syntax.


Configuration and Defaults
var exphbs = require('express-handlebars');
exphbs({ /* config */ });
