Microtask Queue:

1. It has the highest priority in the event loop in node.
2. It has 2 Queues inside it:-
            1. NextTick Queue (highest priority)
            2. Promise Queue (priority lower than NextTick)

Note:- Firstly, node will drain the nextTick Queue then it will move towards Promise queue and while it is draining the promise queue and encouter a nextTick inside Promise callback it will be listed on nextTick queue but the node  will continue to drain the promise queue completely then  it will check the nextTick queue.

---->  priority is checked between queue drains, not in the middle of draining the Promise queue.
---->  So once Node has started draining the Promise queue, newly added nextTicks wait until the Promise queue is empty.