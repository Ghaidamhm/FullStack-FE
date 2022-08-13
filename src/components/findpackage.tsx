import { Button, Modal } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CreatePackage from "../pages/Packages/createPackage";
import Box from "@mui/material/Box";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import { motion } from "framer-motion";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Findnpackage(props: any) {
  const [data, setData] = useState("");
  const [open, setOpen] = React.useState(false);
  const [openPackage, setOpenPackage] = React.useState(false);
  const navigate = useNavigate();

  const handleClose = () => props.setLoginOpen(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate(`search?q=${data}`);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <section className="hero-section ">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-2">
            <h2 className="hero-title text-center">Find your package</h2>
            <div className="hero-search-parent mx-auto">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Search"
                  id=""
                  aria-describedby="emailHelp"
                  value={data}
                  onChange={(event) => setData(event.target.value)}
                />

                <button
                  onClick={handleSubmit}
                  className="btn btn-outline-primary search-button"
                >
                  <span>
                    <img src="assets/icons/search-icon.svg" alt="" />
                  </span>
                </button>
              </div>
            </div>
            <div className="browse-subject flex-wrap m-585 mx-auto d-flex justify-content-between align-items-center">
              <div>
                <p>
                  Or browse by
                  <a href="">
                    <b>Category</b>
                  </a>
                </p>
              </div>
              <div>
                <a href="" className="learn-more">
                  Learn more
                  <span>
                    <img
                      height={10}
                      width={10}
                      src="/assets/icons/show-less-anchor-icon.png"
                      alt=""
                    />
                  </span>
                </a>
              </div>
            </div>
            <h4 className="popular-courses text-center">Popular packages</h4>
            <div className="courses-pills-parent d-flex flex-wrap justify-content-center">
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="pills"
              >
                fastify
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                href=""
                className="pills"
              >
                prisma
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                href=""
                className="pills"
              >
                bcrypt
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                href=""
                className="pills"
              >
                lodash
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                href=""
                className="pills"
              >
                jwt
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                href=""
                className="pills"
              >
                nextJs
              </motion.a>
            </div>
          </div>
        </div>
      </div>
      <div className="model-background">
        <div className="col-md-12  ">
          {/* login Modal */}
          <Modal
            open={props.loginOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Login
                handleClose={handleClose}
                modalOpen={props.loginOpen}
              ></Login>
            </Box>
          </Modal>

          {/* Create Package Modal */}
          <Modal
            open={props.openPackage}
            onClose={() => props.setOpenPackage(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <CreatePackage hide={(v: boolean) => setOpenPackage(v)} />
            </Box>
          </Modal>
          {/* profile Modal  */}
          <Modal
            open={props.profileOpen}
            onClose={() => props.setProfileOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Profile />
            </Box>
          </Modal>
        </div>
      </div>
    </section>
  );
}

export default Findnpackage;
