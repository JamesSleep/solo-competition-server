const HOME = "/";
const MATCHES = "/matches";
const MATCH_DETAIL = "/:id";
const UPLOAD = "/upload";

const routes = {
  home: HOME,
  matches: MATCHES,
  matchDetail: (id) => {
    if (id) {
      return `/match/${id}`;
    } else {
      return MATCH_DETAIL
    }
  },
  upload: UPLOAD,
}

export default routes;