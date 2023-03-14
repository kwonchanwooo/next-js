import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

/*
  ---None Pre Rendering (일반 React 작업방식)---
  기존 리액트의 CSR방식에서는 일단 빈 inde.html파일이 먼조 로드되고 이어서 리액트 자바스크립트 파일들이 chunk단위로 빌드되면서 빈 html파일에 나중에 데이터가 들어가면서 출력되는 형태 (SEO)

  ---Pre Rendering (Next.js 작업방식)---
  Next는 초기에 서버단에서 미리 만들어진 page폴더안쪽의 정적인 컨텐츠를 html파일형태로 자동 완성한 상태에서 초기 로딩처리 (SEO에 좋음)
  이후에 동적인 데이터 맵핑을 위한 리액트 컴포넌트가 로드완료되면 Static한 페이지에 기능을 나중에 결합시켜서 동적 처리

  SSG (Static-Site-Generation)
  - Next프로젝트를 빌드시 pre-render
  - 장점 - 미리 빌드되는 시점에 페이지가 완성되기 때문에 로딩이 빠름
  - 단점 - 서버 요청전이 미리 빌드가 되어야 되기 때문에 정적인 페이지만 가능

  SSR (Server Side Rendering)
  - 서버에서 해당 페이지 파일을 불러올떄 pre-render
  - 단점 - 서버 호출시에 pre-render되기 때문에 초기 로딩속도가 SSG방식에 비해서는 좀 느림
  - 장점 - 페이지가 첨에 서버에서 구동될때마다 새로운 데이터를 갱신 가능
*/
