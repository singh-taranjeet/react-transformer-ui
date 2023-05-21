import { CONFIG } from "../../config";
import './style.css';

export const Playground = () => {

    return <iframe
    class="w-full playground overflow-hidden overflow-x-clip rounded"
    src={CONFIG.PLAY_GROUND_IFRAME_URL}
/>
}