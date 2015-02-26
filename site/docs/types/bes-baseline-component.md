# type: bes baseline component

The &lt;bes baseline component&gt; inspectors return the individual components of a Baseline, such as Fixlets, Tasks or other Baselines.

# action of &lt;bes baseline component&gt;

Returns the Action corresponding to the specified BES Baseline component.

# applicable computer count of &lt;bes baseline component&gt;

Returns the number of computers (regardless of locking) that have reported that the specified BES Baseline component is relevant.

# applicable computer set of &lt;bes baseline component&gt;

Returns the set of computers where the given baseline component(s) is applicable, i.e., those computers where the baseline component is relevant.

# id of &lt;bes baseline component&gt;

Returns the numeric ID of the specified BES Baseline component.

# include in relevance flag of &lt;bes baseline component&gt;

When you define a Baseline by adding components, the default is to OR the relevance from each baseline component with the overall Baseline relevance. Thus, the multiple Action group will be relevant on machines where any of the components are relevant. If you add a component that is always relevant (such as &quot;true&quot;), you might want to uncheck the &quot;Baseline will be relevant on applicable computers where this component is relevant&quot; checkbox (click the + next to the component name to see it). This inspector returns `True` if this box is checked for the specified component.

# name of &lt;bes baseline component&gt;

Returns the name of the specified BES Baseline component.

# relevance of &lt;bes baseline component&gt;

Returns the relevance expression used to determine if the specified BES Baseline component is applicable on a client computer.

# source fixlet of &lt;bes baseline component&gt;

Returns the BES Fixlet(s) associated with the specified BES Baseline component.

# unknown computer count of &lt;bes baseline component&gt;

Returns the number of unknown computers associated with the specified baseline component.

# unknown computer set of &lt;bes baseline component&gt;

Returns the unknown computers associated with the specified baseline component. The list is formatted as a set for mathematical manipulations, included intersections and unions.
