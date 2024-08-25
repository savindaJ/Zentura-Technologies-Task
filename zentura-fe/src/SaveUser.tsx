import React, { useState, ChangeEvent, FormEvent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

interface UserFormData {
  uid: string;
  email: string;
  given_name?: string;
  middle_name?: string;
  name?: string;
  family_name?: string;
  nickname?: string;
  phone_number?: string;
  comment?: string;
  picture?: string;
  directory?: string;
  metadata?: string; // Use JSON string for simplicity
  tags?: string[];
  is_suspended?: boolean;
  is_bot?: boolean;
}

// const navigate = useNavigate();

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState<UserFormData>({
    uid: "",
    email: "",
    given_name: "",
    middle_name: "",
    name: "",
    family_name: "",
    nickname: "",
    phone_number: "",
    comment: "",
    picture: "",
    directory: "",
    metadata: "",
    tags: [],
    is_suspended: false,
    is_bot: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked }: any = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  function createUser() {
    fetch("http://localhost:4000/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("User created successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="container mt-5 p-5">
      <h2>User Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="uid">UID</label>
          <input
            type="text"
            className="form-control"
            id="uid"
            name="uid"
            value={formData.uid}
            onChange={handleChange}
            placeholder="Enter UID"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="given_name">Given Name</label>
          <input
            type="text"
            className="form-control"
            id="given_name"
            name="given_name"
            value={formData.given_name || ""}
            onChange={handleChange}
            placeholder="Enter given name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="middle_name">Middle Name</label>
          <input
            type="text"
            className="form-control"
            id="middle_name"
            name="middle_name"
            value={formData.middle_name || ""}
            onChange={handleChange}
            placeholder="Enter middle name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="family_name">Family Name</label>
          <input
            type="text"
            className="form-control"
            id="family_name"
            name="family_name"
            value={formData.family_name || ""}
            onChange={handleChange}
            placeholder="Enter family name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="nickname">Nickname</label>
          <input
            type="text"
            className="form-control"
            id="nickname"
            name="nickname"
            value={formData.nickname || ""}
            onChange={handleChange}
            placeholder="Enter nickname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone_number">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number || ""}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <textarea
            className="form-control"
            id="comment"
            name="comment"
            value={formData.comment || ""}
            onChange={handleChange}
            rows={3}
            placeholder="Enter comment"
          />
        </div>
        <div className="form-group">
          <label htmlFor="picture">Picture URL</label>
          <input
            type="text"
            className="form-control"
            id="picture"
            name="picture"
            value={formData.picture || ""}
            onChange={handleChange}
            placeholder="Enter picture URL"
          />
        </div>
        <div className="form-group">
          <label htmlFor="directory">Directory</label>
          <input
            type="text"
            className="form-control"
            id="directory"
            name="directory"
            value={formData.directory || ""}
            onChange={handleChange}
            placeholder="Enter directory"
          />
        </div>
        <div className="form-group">
          <label htmlFor="metadata">Metadata</label>
          <input
            type="text"
            className="form-control"
            id="metadata"
            name="metadata"
            value={formData.metadata || ""}
            onChange={handleChange}
            placeholder="Enter metadata (JSON format)"
          />
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags (comma separated)</label>
          <input
            type="text"
            className="form-control"
            id="tags"
            name="tags"
            value={formData.tags?.join(", ") || ""}
            onChange={(e) => {
              const tags = e.target.value.split(",").map((tag) => tag.trim());
              setFormData({ ...formData, tags });
            }}
            placeholder="Enter tags"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="is_suspended"
            name="is_suspended"
            checked={formData.is_suspended || false}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="is_suspended">
            Suspended
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="is_bot"
            name="is_bot"
            checked={formData.is_bot || false}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="is_bot">
            Bot
          </label>
        </div>
        <a href="/">
          <button
            onClick={() => {
              createUser();
            }}
            className="btn btn-primary mt-3"
          >
            Submit
          </button>
        </a>
      </form>
    </div>
  );
};

export default UserForm;
