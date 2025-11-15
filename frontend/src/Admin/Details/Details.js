import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialFormState = {
  theme: '',
  title: '',
  serviceTag: '',
  caption: '',
  description: '',
  youtubeLink: '',
  preacher: '',
  preacherThumbnail: '',
  messageThumbnail: '',
  audioFile: '',
  pdfFile: '',
};

const serviceTagOptions = [
  'Bible Study',
  'Sunday Service',
  'Radio',
  'Prayer Meeting',
  'Youth Fellowship',
];

const Details = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isReviewing, setIsReviewing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', or null
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevState) => ({
          ...prevState,
          [name]: reader.result, // Store as base64 string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.title.trim()) nextErrors.title = 'Title is required.';
    if (!formData.serviceTag) nextErrors.serviceTag = 'Service tag is required.';
    if (!formData.caption.trim()) nextErrors.caption = 'Caption is required.';
    if (!formData.description.trim()) nextErrors.description = 'Description is required.';
    if (!formData.preacher.trim()) nextErrors.preacher = 'Preacher name is required.';
    if (!formData.audioFile) nextErrors.audioFile = 'Audio file is required.';
    return nextErrors;
  };

  const handleReview = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }
    setIsReviewing(true);
  };

  const handleEdit = () => {
    setIsReviewing(false);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmissionStatus(null);
    const token = localStorage.getItem('token'); // Retrieve the token

    if (!token) {
      setSubmissionStatus('error');
      setErrors({ auth: 'Authentication token not found. Please log in again.' });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://sepcamwebapp.azurewebsites.net/admin/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSubmissionStatus('success');
      setTimeout(() => navigate('/dashboard'), 2000); // Redirect after 2 seconds
    } catch (error) {
      setSubmissionStatus('error');
      setErrors({ submit: 'An error occurred during submission. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setErrors({});
    setIsReviewing(false);
    setSubmissionStatus(null);
  };

  if (isReviewing) {
    return (
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900">Review Information</h2>
          <p className="mt-1 text-sm text-gray-500">Please review the details below before submitting.</p>
          
          <div className="mt-6 space-y-4">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key}>
                <h3 className="text-sm font-medium text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</h3>
                <p className="mt-1 text-md text-gray-800 break-words">
                  {value ? (typeof value === 'string' && value.startsWith('data:') ? 'File data captured' : value) : 'Not provided'}
                </p>
              </div>
            ))}
          </div>

          {submissionStatus === 'success' && (
            <div className="mt-4 text-green-600">Form submitted successfully! Redirecting...</div>
          )}
          {submissionStatus === 'error' && (
            <div className="mt-4 text-red-600">{errors.submit || errors.auth}</div>
          )}

          <div className="flex items-center justify-end gap-4 mt-8">
            <button
              type="button"
              onClick={handleEdit}
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="inline-flex items-center rounded-md border-gray-300 bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
            >
              {isSubmitting ? 'Submitting…' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Upload Channel Content</h2>
            <p className="mt-1 text-sm text-gray-500">
              Provide the message details, media assets, and preacher information before publishing.
            </p>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            Reset form
          </button>
        </div>

        <form onSubmit={handleReview} className="space-y-10">
          <section>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Message Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="theme" className="block text-sm font-medium text-gray-700">
                  Theme <span className="text-xs font-normal text-gray-500">(Optional)</span>
                </label>
                <input
                  id="theme"
                  name="theme"
                  type="text"
                  value={formData.theme}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Life and Ministry of Jesus Christ"
                />
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title<span className="text-red-500">*</span>
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Jesus' Sermon on The Mount"
                />
                {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
              </div>

              <div>
                <label htmlFor="serviceTag" className="block text-sm font-medium text-gray-700">
                  Service Tag<span className="text-red-500">*</span>
                </label>
                <select
                  id="serviceTag"
                  name="serviceTag"
                  value={formData.serviceTag}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">Select a service tag</option>
                  {serviceTagOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.serviceTag && <p className="mt-1 text-sm text-red-600">{errors.serviceTag}</p>}
              </div>

              <div>
                <label htmlFor="youtubeLink" className="block text-sm font-medium text-gray-700">
                  YouTube Link <span className="text-xs font-normal text-gray-500">(Optional)</span>
                </label>
                <input
                  id="youtubeLink"
                  name="youtubeLink"
                  type="url"
                  value={formData.youtubeLink}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="https://youtube.com/..."
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="caption" className="block text-sm font-medium text-gray-700">
                Caption<span className="text-red-500">*</span>
              </label>
              <textarea
                id="caption"
                name="caption"
                rows={3}
                value={formData.caption}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="How can mutual submission..."
              />
              {errors.caption && <p className="mt-1 text-sm text-red-600">{errors.caption}</p>}
            </div>

            <div className="mt-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description<span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                rows={6}
                value={formData.description}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Full message description..."
              />
              {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Media Assets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="messageThumbnail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message Thumbnail <span className="text-xs font-normal text-gray-500">(Optional)</span>
                </label>
                <input
                  id="messageThumbnail"
                  name="messageThumbnail"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="mt-1 block w-full text-sm text-gray-700"
                />
                {errors.messageThumbnail && (
                  <p className="mt-1 text-sm text-red-600">{errors.messageThumbnail}</p>
                )}
              </div>

              <div>
                <label htmlFor="audioFile" className="block text-sm font-medium text-gray-700">
                  Audio File<span className="text-red-500">*</span>
                </label>
                <input
                  id="audioFile"
                  name="audioFile"
                  type="file"
                  accept="audio/*"
                  onChange={handleFileChange}
                  className="mt-1 block w-full text-sm text-gray-700"
                />
                {errors.audioFile && <p className="mt-1 text-sm text-red-600">{errors.audioFile}</p>}
              </div>

              <div>
                <label htmlFor="pdfFile" className="block text-sm font-medium text-gray-700">
                  PDF Outline <span className="text-xs font-normal text-gray-500">(Optional)</span>
                </label>
                <input
                  id="pdfFile"
                  name="pdfFile"
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className="mt-1 block w-full text-sm text-gray-700"
                />
                {errors.pdfFile && <p className="mt-1 text-sm text-red-600">{errors.pdfFile}</p>}
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Preacher Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="preacher" className="block text-sm font-medium text-gray-700">
                  Preacher<span className="text-red-500">*</span>
                </label>
                <input
                  id="preacher"
                  name="preacher"
                  type="text"
                  value={formData.preacher}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Pastor S. P. Ayodeji"
                />
                {errors.preacher && <p className="mt-1 text-sm text-red-600">{errors.preacher}</p>}
              </div>

              <div>
                <label
                  htmlFor="preacherThumbnail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Preacher Thumbnail URL <span className="text-xs font-normal text-gray-500">(Optional)</span>
                </label>
                <input
                  id="preacherThumbnail"
                  name="preacherThumbnail"
                  type="url"
                  value={formData.preacherThumbnail}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="https://...jpg"
                />
              </div>
            </div>
          </section>

          <div className="flex items-center justify-end gap-4">
            <button
              type="button"
              onClick={handleReset}
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Clear
            </button>
            <button
              type="submit"
              className="inline-flex items-center rounded-md border-gray-300 bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Review Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Details;
