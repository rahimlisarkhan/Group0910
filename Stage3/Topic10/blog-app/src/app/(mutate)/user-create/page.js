'use client';

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useProductStore } from '@/store/product.store';

const UserCreate = () => {
  const createPost = useProductStore((state) => state.createPost);

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      content: Yup.string().required('Content is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log('Form submitted:', values);
      createPost(values);
      resetForm();
    },
  });

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Create Post
      </h2>
      <form onSubmit={formik.handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className={`w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 ${
              formik.touched.title && formik.errors.title
                ? 'border-red-500 focus:ring-red-400'
                : 'border-gray-300 focus:ring-blue-500'
            }`}
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter post title"
          />
          {formik.touched.title && formik.errors.title && (
            <div className="text-sm text-red-500 mt-1">
              {formik.errors.title}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows="4"
            className={`w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 ${
              formik.touched.content && formik.errors.content
                ? 'border-red-500 focus:ring-red-400'
                : 'border-gray-300 focus:ring-blue-500'
            }`}
            value={formik.values.content}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Write something..."
          />
          {formik.touched.content && formik.errors.content && (
            <div className="text-sm text-red-500 mt-1">
              {formik.errors.content}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
        >
          {formik.isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default UserCreate;
