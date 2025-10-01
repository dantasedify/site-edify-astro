const ShareLinks = () => {
  return (
    <ul>
      <li>
        <a
          href={`https://twitter.com/intent/tweet?url=${window?.location?.href}`}
          target="_blank"
          aria-label="social meida links"
        >
          <img src="/assets/images/icon/twitter.png" height={25} width={25} alt="twitter"></img>
        </a>
      </li>
      <li>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${window?.location?.href}`}
          target="_blank"
          aria-label="social meida links"
        >
          <img src="/assets/images/icon/facebook.png" height={25} width={25} alt="facebook"></img>
        </a>
      </li>
      <li>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${window?.location?.href}`}
          target="_blank"
          aria-label="social meida links"
        >
          <img src="/assets/images/icon/linkedin.png" height={25} width={25} alt="linkedin"></img>
        </a>
      </li>
    </ul>
  );
};

export default ShareLinks;
