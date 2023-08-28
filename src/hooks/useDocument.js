import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState("");
  const [error, setError] = useState("");

  // realtime data for document
  useEffect(() => {
    const ref = projectFirestore.collection(collection).doc(id);

    // when we first setup the connection to the collection (or collection's particular document like in the current case because of /.doc('id')/) we get the initial state of the collection (or that particular document) with all the data passed as an argument in the callback function and thereafter whenever the change occur in any document of the collection we get another snapshot and the callback gets fired again (not true for this case. In this case it will only run if the document whose reference it contains gets updated then only the callback will run)
    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        if (snapshot.data()) {
          setError(null);
          setDocument({ ...snapshot.data(), id: snapshot.id });
        } else {
          setError("No such document exists!");
        }
      },
      (err) => {
        console.log(err.message);
        setError("failed to get the document");
      }
    );

    return () => unsubscribe();
  }, [collection, id]);

  return { document, error };
};
