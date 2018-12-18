using GraphQL;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Text;

namespace Orders.Schema
{
    public class OrderSchema : GraphQL.Types.Schema
    {
        public OrderSchema(OrdersQuery query, OrdersMutation mutation,
            IDependencyResolver resolver)
        {
            Query = query;
            Mutation = mutation;
            DependencyResolver = resolver;
        }
    }
}
