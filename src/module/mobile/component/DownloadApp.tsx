import Image from "next/image";

const DownloadApp = () => {
  return (
    <div className="flex gap-4">
      <a
        href="/_"
        className="text-default cursor-pointer text-xl rounded-full"
        target="_blank"
      >
        <Image
          src="https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/AppStore.36362f83.svg"
          alt="apple store image"
          width={166}
          height={55}
          loading="lazy"
        />
      </a>
      <a
        href="/_"
        className="text-default cursor-pointer text-xl rounded-full"
        target="_blank"
      >
        <Image
          src="https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/PlayStore.7128a9f5.svg"
          alt="apple store image"
          width={186}
          height={55}
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default DownloadApp;
