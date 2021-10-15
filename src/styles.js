import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlovalStyle = createGlobalStyle`
    ${reset};
    body {
        background-color: #f8f9fa;;
    }
`;

export default GlovalStyle;