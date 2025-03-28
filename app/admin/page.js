'use client'
import React, { useState } from "react";
import axios from "axios"; // Import Axios

function AddWatch() {
  const [formData, setFormData] = useState({
    name: "",
    originalPrice: "",
    discountedPrice: "",
    description: "",
    category: "",
    gender: "",
    file: null,
  });
  const [loading , setLoading] = useState(false)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    if (!formData.file) {
      alert("Please select a file");
      return;
    }

    // Prepare FormData
    const data = new FormData();
    data.append("name", formData.name);
    data.append("originalPrice", formData.originalPrice);
    data.append("discountedPrice", formData.discountedPrice);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("gender", formData.gender);
    data.append("file", formData.file); // Append image file

    try {
      const response = await axios.post("/api/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      
      alert(response.data.message);
      setLoading(false)
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed");
    }
  };

  return (
    

    
    <div className="flex items-center justify-center">
      {loading && (
        <h1 className="text-[5rem] text-center">Uploading wait</h1>
      )}
      {!loading && (
      <div className="mx-auto w-full max-w-[550px] bg-[#121212]">
        <form className="py-4 px-9" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="text-white">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400" />
          </div>
          <div className="mb-5">
            <label className="text-white">Original Price</label>
            <input type="number" name="originalPrice" value={formData.originalPrice} onChange={handleChange} className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400" />
          </div>
          <div className="mb-5">
            <label className="text-white">Discounted Price</label>
            <input type="number" name="discountedPrice" value={formData.discountedPrice} onChange={handleChange} className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400" />
          </div>
          <div className="mb-5">
            <label className="text-white">Description</label>
            <input type="text" name="description" value={formData.description} onChange={handleChange} className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400" />
          </div>
          <div className="mb-5">
            <label className="text-white">Category</label>
            <select name="category" value={formData.category} onChange={handleChange} className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400">
              <option  className='bg-[#121212]' value="">Select Category</option>
              <option  className='bg-[#121212]' value="automatic">Automatic</option>
              <option  className='bg-[#121212]' value="analog">Analog</option>
              <option  className='bg-[#121212]' value="smart">Smart</option>
              <option  className='bg-[#121212]' value="digital">Digital</option>
              <option  className='bg-[#121212]' value="hybrid">Hybrid</option>
              <option  className='bg-[#121212]' value="chronograph">Chronograph</option>
              <option  className='bg-[#121212]' value="bestseller">Best Seller</option>
              <option  className='bg-[#121212]' value="wall-clocks">Wall clocks</option>
            </select>
          </div>
          <div className="mb-5">
            <label className="text-white">Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange} className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400">
              <option  className='bg-[#121212]' value="">Select Gender</option>
              <option  className='bg-[#121212]' value="men">Men</option>
              <option  className='bg-[#121212]' value="women">Women</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="text-white">Upload Image</label>
            <input type="file" name="file" onChange={handleFileChange} className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400" />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 w-full">Upload</button>
        </form>
      </div>)}
    </div>
  
  );
}

export default AddWatch;
