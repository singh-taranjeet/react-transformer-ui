import {A} from '@solidjs/router';
import Logo from './transformer.png';
export const Navbar = () => {
    return (
        <nav class='border-b py-2'>
            <ul class="flex gap-2 container mx-auto md:gap-4">
                <li>
                    <figure class='h-12 w-12'>
                        <img class='rounded border w-full' src={Logo} alt="React transformer logo" />
                    </figure>
                </li>
                <li class='my-auto'>
                    <A href='/'>Home</A>
                </li>
                <li class='my-auto'>
                    <A href='/docs'>Docs</A>
                </li>
            </ul>
        </nav>
    )
}