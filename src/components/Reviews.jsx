import { getReview } from "services/apiService"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


export default function Reviews(){
    
     const params = useParams();

const [rewiev, setRewiev] = useState(null);

useEffect(() => {
  getReview(params.id).then(rewiev => setRewiev(rewiev));
}, [params.id]);

return (
    <>
      {rewiev &&
        (rewiev.results.length !== 0 ? (
          <ul>
            {rewiev.results.map(actor => (
              <li key={actor.id}>
                <p>
                  <strong>author:</strong> {actor.author}
                </p>

                <p>
                  <strong>content:</strong> {actor.content}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <h2> We don't have any rewievs for this movie</h2>
        ))}
    </>
  );
}