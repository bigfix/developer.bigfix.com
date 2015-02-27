# type: priority class

Threads are scheduled based on priority, which ranges from zero, the lowest, to 31, the highest. The zero-page thread, a system thread in charge of zeroing free pages when all other threads are finished, is the only thread allowed to have a priority of zero.

# &lt;priority class&gt; = &lt;priority class&gt;

Returns `True` if the two priority classes are the same.
