import { Playground } from "../../core/components/Playground"


const list = [
    {
        question: 'What is React Transformer?',
        answer: <div>React Transformer is a simple React component which can give power to user to transform a pattern string to complex React components. For example a string <code class="rounded bg-slate-200">{`<<|BOLD|strong text|>>`}</code> would be converted to <b>strong text</b> when using React Transformer</div>
    },
    {
        question: 'How to use React Transformer?',
        answer: <div>
            <p>Create a pattern string in <i>prefix</i> <i>seperator</i> <i>element type</i> <i>seperator</i> <i>stringified json or string</i> <i>seperator</i> <i>suffix</i> format.</p>
            <p>The default values are as follows:</p>
            <ul>
                <li class="px-2 py-1">
                    <b class="font-semibold">Prefix</b>: {'<<'}
                </li>
                <li class="px-2 py-1">
                    <b class="font-semibold">Seperator</b>: {'|'}
                </li>
                <li class="px-2 py-1">
                    <b class="font-semibold">Suffix</b>: {'>>'}
                </li>
                <li class="px-2 py-1">
                    <b class="font-semibold">Element type</b>: HTML element tag or custom component
                </li>
                <li class="px-2 py-1">
                    <b class="font-semibold">Data</b>: Stringified json string or a string
                </li>
            </ul>

            <div class="flex gap-2">
            <code class="rounded bg-slate-200">
                {'<Replacer> This is very<<|Bold|powerfull>>.</Replacer>'}
            </code>

            <i>Convert to </i>

            <div class="rounded bg-slate-200">
                This is very <b>powerfull</b>.
            </div>
            </div>

        </div>
    }

]

export const Home = () => {
    return <article>
        <section>
            {
                list.map((item, index) => {
                    return (
                        <div class="py-2 border-b" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                            <h2 class="font-bold py-2" itemprop="name">{item.question}</h2>
                            <div class="px-2" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                                <div itemprop="text">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </section>
        <Playground />
    </article>
}