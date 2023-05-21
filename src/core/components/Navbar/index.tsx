import {A} from '@solidjs/router';
import Logo from './transformer.png';
export const Navbar = () => {
    return (
        <nav class='border-b py-2 p-2 md:px-0'>
            <ul class="flex gap-2 container mx-auto md:gap-4">
                <li>
                    <A href='/'>
                    <figure class='h-12 w-12'>
                        <img class='rounded border w-full' src={Logo} alt="React transformer logo" />
                    </figure>
                    </A>
                </li>
                <li class='my-auto'>
                    <A href='/'>Home</A>
                </li>
                <li class='my-auto'>
                    <A href='/playground'>Playground</A>
                </li>
            </ul>
        </nav>
    )
}