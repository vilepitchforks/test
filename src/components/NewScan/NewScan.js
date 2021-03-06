import { useState } from "react";
import { useStoreState } from "easy-peasy";

import NewScanModal from "../NewScanModal/NewScanModal";
import NewScanIcon from "../NewScanIcon/NewScanIcon";

const NewScan = () => {
  const [isNew, setIsNew] = useState(true);
  const [newScan, setNewScan] = useState(false);

  const { scanInProgress } = useStoreState(state => state);

  return (
    <>
      {newScan && (
        <NewScanModal
          isNew={isNew}
          setIsNew={setIsNew}
          setNewScan={setNewScan}
        />
      )}
      {!scanInProgress && <NewScanIcon setNewScan={setNewScan} />}
    </>
  );
};

export default NewScan;
