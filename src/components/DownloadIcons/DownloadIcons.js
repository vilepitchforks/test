import { useState, useEffect } from "react";
import { useStoreState } from "easy-peasy";

import css from "./DownloadIcons.module.css";

import {
  handleDownloadXlsAll,
  handleDownloadXls,
  handleDownloadCsvBlob,
  handleDownloadJsonBlob
} from "./DownloadIcons.helper.js";

const xlsx =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAFIUlEQVR4Xu2bS0hWQRTH51pBQiFFhAS5CVfpoo1EkBRILpIwgqiMyoVBq+hpkbQIIexhtQoysCItgkjCFqZUKIi0KdJWEkGLsOhBVLSwvHnED67XmTMz38x9fHfOt8wzM3f+v5nznzn35jH6JaqAl+joNDgjAAkvAgJAABJWIOHhaQcUOoAlR9f7Cc9Ba/jph2373T5ySqtRhMHGO6DQAICWaYLgJIA0QXAGwOHNO9i15w/nJJM07ARnALw+c5V1Dg+lDoJTAGD5pw2CcwDSBsFJAGmC4CyAtEBwGkAaIDgPIGkIBGD2ZpDU6YgABK5mSUAgAKFCW9wQCACn0hknBAIgKDXHBYEAILX+OCAQAMnLlqghEACFt11RQiAACgCivKwRAEUAIgi/2keMNDRqDA9VKO+E4YWMjV84HREAG6oa9EEADMSz0ZQA2FDRoA8CYCCejaYEwIaKBn0QAAPxbDTNDIDSkuVs/OwToSYtvZfmfdODCbitchPrOnCeGzL6cZxtuLzPhv4sMwBAjQv1R9ihjTu5wnz/85NVXdzFJn58UxJu+NgdVrmqnBtb3baXvfr8TqkfWVCmAMBkP7Q+ZcuKl3LnfX3oATvZc0WmCYPPEFvrjhv1IR1kNiBzALDUoboLRBBV26uKD3GZAwCTwtKHbBdgq7/h1mn2ePSFjr7S2EwCWLdyDRtsvqvtBWDkL0/c56aw3rFBtruzWSqobkAmAcgMWbQLRCYeRerJgcosAGw1w+TLz22dcyLCdo3uEVZnF2QWAIigc5q519jG6iqq52ln88zPA5NpADJDzu0CbPVHYbxBEJkHgB1Lc8YqOjVFZbxOAYDJitIL/A3yO+/SFaXxOgdAVifi5eYojdc5ALJjaRhA1MbrJACYNFYnCopis9gmO5Jm3oSDAmCGnIuTlSpkgur+3SkA2L2AAOguHc142c2YUpCmoLrh2FGUTFhXTc14Ue6Hsz78eC9w6BiqKbIoHEs9IPL7L1+F737DBTtLjzSnm8ybsCj1wOova9kyIwaVIqJYWtN9YsfOYIrB4qgYZwBHtLJ5N11RbNQ1ocymIOwTFd6qxkrS+VzOqipLlJbOs8Y+o0/8jRrDE0bx/wMwMbE6D3ZU1U1FTgPAvorAhMwXHG+pOwsAKzeovGDBUpfO3cBJALJyg0qV00YfsCPCABb0r1byhFxQf/dNpfSuFISNbNMDsByusvpzz4ntAtV+nAMgKzXr3Gplu0DFkJ0CIBMsn2Mk5iUqdwOnAGgl15iCCUBMQouGIQAEQE0Bm6cgtRHjiaIdEI/OwlEIAAFQU6DQUpBqiSE8eyduwmrIzaIIgJl+xq0JgLGEZh0QADP9jFuHAUx+WsEWvyk27jefDnzm9aSqGprPJHTb8HaArsHqjsmLB/EHuju2OwcAxEgaguexCW+hV9N3u+OtkwCg+lpW9m/ewoxrJxQt8ipAfHgAJwHAxHkQ4vCDIs872NfV0ZGj7ywAUSqKEkIu7we3ntMA4vQDnvhOp6DgKozalIOmGzYe53eAyA/g322ZctB0CYDgEB+VKYdNlwAgtyheKjIxZVHeJxPWhJBPKlIRn0xYAMLUlDHTpRSkUMgxvSljpmsdgMJ8MhNS29DUNOX7N7AJyUyXABguh5o9TY885tfzulHN+1ZN2HA+BdmcByEf8a2YcEEqaPjQtfub1vp//QHfZ6UzIgbKy7pdG9+EdQfMSjxAmJr0x2A+OqZLHmBxBYApQ3fB8rJu9/8B9g+8QHotYFcAAAAASUVORK5CYII=";
const csv =
  "data:image/png;base64,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";
const json =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAFQUlEQVR4Xu2cv2sUQRTH55JGIYhCAiagSIoEFRWtFGOXaGWRQhCDjRgL/wCx0EIUQf+AFCbYxATBIoKVJo0kop0YQdEiWF2EBJSQwiY58+AmzL17Mzt7b+529+Zto97tm9n5fub9mLeJJSVXpgqUMp1dJlcCIONNIAAEQMYKZDy9eEDRAXz+MVbJeA2ppq+o0pMzgy/upjJq4s1sDygaANAyTxCiBJAnCNEA6Nl/Sa39fVsTTPLgCdEAGDj8WP3ZeJ87CFEBgO2fNwjRAcgbhCgB5AlCtADyAiFqAHmAED2ArCEIgOrJIKvqSAAYR7MsIAgA1GhrNQQBQHQ6WwlBAFhaza2CIAAcvf5WQBAACS9bmg1BAHi87WomBAHgAaCZhzUB4AnABuH04AxLQ5YxPFRR3gnDC5kQFw5HAiCEqowxBABDvBCmAiCEiowxBABDvBCmAiCEiowxBABDvBCmAiCEiowxBABDvBCmAiCEiowxBABDvBCmhQEwObFcs97x2yfr1r++9k99XCqr36ubu98d7O1SR/r3qROnuq16uex6+7pUd8+eOts3cys185w930fOkfTcbQMAC4IVAxDnhvrqxPz6ZV19+lB2bmZKXDwfjH95tL9unCgA+IgIymCRfO3AFkOggFOgogCAF6nDzq+VjZowgYXEdiAghBy4cCiDz8ywRwGgvKDtAVC72BQKf69Fwp/7hBnzHlvIG70yUBPmogPguwuxgFRSt8EDb7ABwPO3PQCoYOZe/aypenAyhHvMC6oaU0BbAnWN7Ur6phe0PQAQlsoBVMVjQjBtbACosbWnUFWQLn/NUBUFAFs1o5MqVcebwthqeOwBZiKmzgFmOatBRQHAFZOp8hPvbN8Q5AIAYcesnDTUaACAOOAJVOmpIZhhKbQHAAC4dD7SUKMCoGO8CwQVGkJ5AE7u4AX4lI2rrbZpRdT1AKoegQWgQkNIAGY+gnHNvhQ+zMG/Cw8AFmxeuOlmq+V9qiDXIQ8nYVfpaT5fbj0g6WRqi6VJMdZWy/scxFwNNxcAV4+pMADMsJDmQIRLykZbEVQJ6mpFJLUgtBfkFoBtwdAcw40xUwhqt+n6f7W8WZcEXYck3cQDsagWtasZhwHYvCC3AJJqeb2DqISZpq1sCpXGLqkdjQFQG6oQSTjpxQpeqAaTZAf3USdeHwg+nVLquahnyrUHuOp4W7vArDCoV4taeNurRfge7CBcmYc4HY58X0lSAFytDP3chSlDqTq/HT4TABlTFAACoFj/bWVoXuIBoRW1jHfnwd5UM83PTnn9+pfXTa6Zi/I7YqnUI24WAFwFmfYCgCkg11wAcBVk2gsApoBccwHAVZBpLwCYAnLNBQBXQaa9AGAKyDUXAFwFmfYCgCkg11wAcBVk2gsApoBccwHAVdBiD+99F5ePN2l097AlVbov3dAdjdLu7iC0Sur7/MzUMQFQVbOlEHbEV1vbw/Mvn5cFQBUA/ATE04kDQTZ30iCVzo4LC9PPluA+AWCoBT9jNP36UJJ+rO8h7r+bnXykBxEASM5mJmUsvniAZS83JR9Uky6eUjygFRCMpCsAPCN4yKRsJl0B4AkAbguRlKm4bz6ChKAEIJyknCS+JGFPb2goKVuSroQgT9HxbakgOJKuAGgQQJqk7Eq6wQE0uJ5Cml28Nn6voioPXQ/vE/eDJuFCKsl4aBeEtOIHScKMtRTWdGTs5jdVUUdrFuCZdCUEBcA+cvVGn+rsWNiFkCLpCoAAAGCI4eu3hkpb24vw9zRJVwAEAgDDQD6AP832ctrh/wNiXwwt6bNvAgAAAABJRU5ErkJggg==";

const DownloadXlsAll = ({ scannedUrl }) => {
  const { db } = useStoreState(state => state);

  return (
    <img
      className={css["download-icon"] + " u-pull-right"}
      src={xlsx}
      alt={scannedUrl}
      title="Download as .xlsx"
      onClick={async () => await handleDownloadXlsAll(db, scannedUrl)}
    />
  );
};

const DownloadXls = ({ selectedWeb, reportData }) => {
  return (
    <img
      className={css["download-icon"]}
      src={xlsx}
      title="Download current sheet as .xlsx"
      onClick={() => handleDownloadXls(selectedWeb, reportData)}
    />
  );
};

const DownloadCsv = ({ selectedWeb, reportData }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const { reportTitle, blobURL } = handleDownloadCsvBlob(
      selectedWeb,
      reportData
    );

    setTitle(reportTitle);
    setUrl(blobURL);

    return () => window.URL.revokeObjectURL(blobURL);
  }, [reportData]);

  return (
    <a title="Download current sheet as .csv" href={url} download={title}>
      <img className={css["download-icon"]} src={csv} />
    </a>
  );
};

const DownloadJson = ({ selectedWeb, reportData }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const { reportTitle, blobURL } = handleDownloadJsonBlob(
      selectedWeb,
      reportData
    );

    setTitle(reportTitle);
    setUrl(blobURL);

    return () => window.URL.revokeObjectURL(blobURL);
  }, [reportData]);

  return (
    <a title="Download current sheet as .json" href={url} download={title}>
      <img className={css["download-icon"]} src={json} />
    </a>
  );
};

export { DownloadXlsAll, DownloadXls, DownloadCsv, DownloadJson };
