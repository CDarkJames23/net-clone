import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addMovie } from "../../store/actionCreators";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const MovieSchema = Yup.object().shape({
  title: Yup.string()
    .max(50, "The entry seems to be too long")
    .required("This field is required"),

  poster_path: Yup.string().required("This field is required"),

  overview: Yup.string() 
    .min(20, "The overview needs to have at least 20 characters")
    .required("This field is required"),

    
    release_date: Yup.string().required("This field is required"),
    overview: Yup.string().required("This field is required"),
    runtime: Yup.number().required("This field is required"),
    
});

const FormikAddMovie = () => {
  const [submitted, setSubmitted] = useState(false);
  const dispatch= useDispatch()
  const movies= useSelector(state=> state.movies)

  useEffect(()=>{
    console.log("formik movies: "+JSON.stringify(movies[0]))

  },[])

  const handleSubmit = (values) => {
    setSubmitted(true);
    values.genres=[values.genres]
    values.id=Math.random().toString()
    console.log(values)
    console.log("before :"+movies)

    dispatch(addMovie(values))
    console.log("after :"+movies)

  };

  return (
    <div className="form">
      <h1>Add Movie</h1>
      <Formik
        initialValues={{
          title: "",
          release_date: "",
          poster_path: "",
          genres: [],
          overview: "",
          runtime: "",
        }}
        validationSchema={MovieSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="form__content">
            <div className="form__contact-field-box">
              <div>
                <label htmlFor="title">Title</label>
                <br />

                <Field
                  name="title"
                  className="form__input"
                  placeholder="Title"
                  type="text"
                  id="title"
                />
                {errors.title && touched.title ? (
                  <div className="form__error-message">{errors.title}</div>
                ) : null}
              </div>
              <label htmlFor="release_date">Release Date</label>
              <br />

              <Field
                name="release_date"
                placeholder="Choose Date"
                className="form__input"
                type="text"
                id="release_date"
              />
              {errors.release_date && touched.release_date ? (
              <div className="form__error-message">{errors.release_date}</div>
            ) : null}
              <div>
                <label htmlFor="poster_path">Movie URL</label>
                <br />

                <Field
                  name="poster_path"
                  placeholder="Movie URL here"
                  className="form__input"
                  type="text"
                  id="poster_path"
                />
                {errors.poster_path && touched.poster_path ? (
                  <div className="form__error-message">
                    {errors.poster_path}
                  </div>
                ) : null}
              </div>
              <label htmlFor="genres">Genre</label>
              <br />

              <Field
                name="genres"
                placeholder="Genre"
                className="form__input"
                type="text"
                id="genres"
              />
              {errors.genres && touched.genres ? (
              <div className="form__error-message">{errors.genres}</div>
            ) : null}
              <div>
                <label htmlFor="overview">Overview</label>
                <br />

                <Field
                  name="overview"
                  placeholder="Overview"
                  className="form__input"
                  type="text"
                  id="overview"
                />
                {errors.overview && touched.overview ? (
                  <div className="form__error-message">{errors.overview}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="runtime">Runtime</label>
                <br />

                <Field
                  name="runtime"
                  placeholder="Runtime"
                  className="form__input"
                  type="number"
                  id="runtime"
                />
                {errors.runtime && touched.runtime ? (
              <div className="form__error-message">{errors.runtime}</div>
            ) : null}
              </div>
            </div>

            {errors.notes && touched.notes ? (
              <div className="form__error-message">{errors.notes}</div>
            ) : null}
            <div className="button-area">
              <button type="reset" className="button-secondary">reset</button>
              <button className="button-main" type="submit">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <p>
        {submitted ? (
          <div className="form__submit-message">Moview will be added</div>
        ) : null}
      </p>
    </div>
  );
};

export default FormikAddMovie;
