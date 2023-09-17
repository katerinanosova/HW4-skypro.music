import { useParams } from "react-router-dom";

export default function Categories() {
    const params = useParams();
    
    return (
        <div>
            <h1>Categories page {params.id}</h1>
        </div>
    )
}