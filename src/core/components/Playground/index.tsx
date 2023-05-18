const CopyIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
    </svg>

}

export const Playground = () => {

    const samples = [
        'This is <<|BOLD|bold|>> text',
        'This is <<|ITALIC|italic|>> text',
        'This is <<|H1|heading 1|>> .',
        'This is <<|H2|heading 2|>> .',

    ]

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    }

    return <section class="my-6">

        <h2 class="text-lg font-bold mb-2">Playground</h2>
        <h2 class="mb-2">Try playing with follwoing examples and see how you can transform your strings</h2>
        <ul>
            {
                samples.map((sample, index) => {
                    return <li class='hover:bg-slate-100 bg-slate-200 rounded my-2'>
                        <div class="flex justify-between px-4 py-2">
                            <p class='flex flex-col justify-center text-slate-950'>{sample}</p>
                            <div class="w-6 h-6 flex">
                                <i
                                    onClick={() => copyToClipboard(sample)}
                                    class='cursor-pointer rounded-full active:border m-auto text-white'>
                                    <CopyIcon />
                                </i>
                            </div>
                        </div>
                    </li>
                })
            }
        </ul>
        <iframe
            style={{ 'min-height': '400px' }}
            sandbox="allow-scripts"
            class="w-full min min-h-96 min-h-fit"
            src="https://taranjeet-singh-me.web.app/" />
    </section>
}