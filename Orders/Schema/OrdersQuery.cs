using GraphQL.Types;
using System.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using Orders.Services;

namespace Orders.Schema
{
    public class OrdersQuery : ObjectGraphType<object>
    {
        public OrdersQuery(IOrderService orders)
        {
            Name = "Query";
            Field<ListGraphType<OrderType>>(
                "orders",
                resolve: context => orders.GetOrderAsync()
                );
        }
    }
}
