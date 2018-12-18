using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Text;

namespace Orders.Schema
{
    public class OrderStatusEnum : EnumerationGraphType
    {
        public OrderStatusEnum()
        {
            Name = "OrderStatuses";
            AddValue("CREATED", "Order was created", 2);
            AddValue("PROCESSING", "Order is being processed", 4);
            AddValue("COMPLETED", "Order is completed", 8);
            AddValue("CANCELLED", "Order was cancelled", 16);
            AddValue("CLOSED", "Order was closed", 32);
        }
    }
}
