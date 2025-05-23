import { useState } from "react";
import { Button } from "/src/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "/src/components/ui/dialog";
import { Input } from "/src/components/ui/input";
import { Label } from "/src/components/ui/label";
import { Textarea } from "/src/components/ui/textarea";
import ScheduleButton from "../ScheduleButton/Index";

const ScheduleMeeting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    date: "",
    time: "",
    attendees: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.name.trim()) {
      newErrors.title = "Name is required";
    }

    if (!formData.date) {
      newErrors.date = "Date is required";
    }

    if (!formData.time) {
      newErrors.time = "Time is required";
    }

    if (!formData.attendees.trim()) {
      newErrors.attendees = "At least one attendee is required";
    } else {
      const emails = formData.attendees.split(",").map((e) => e.trim());
      const invalidEmails = emails.filter(
        (email) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      );
      if (invalidEmails.length > 0) {
        newErrors.attendees =
          "Must be valid email addresses separated by commas";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const email = "chuxmgbojikwe@gmail.com";
      const subject = encodeURIComponent(
        `Contact Form Submission from: ${formData.name} - ${formData.title}`
      );
      const body = encodeURIComponent(
        `${formData.description}\n\nFrom: ${formData.name}\nEmail: ${formData.attendees}\nDate: ${formData.date}\nTime: ${formData.time}`
      );

      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

      setIsSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
        setFormData({
          title: "",
          name: "",
          date: "",
          time: "",
          attendees: "",
          description: "",
        });
        setErrors({});
      }, 5000);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <ScheduleButton handleClick={() => setIsOpen(true)} />

      {/* Overlay dialog */}
      {isOpen && (
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Schedule Meeting</DialogTitle>
            <DialogDescription>
              Schedule a meeting with me. Looking forward to our conversation!
            </DialogDescription>
          </DialogHeader>

          {isSubmitted ? (
            <div className="text-center py-8">
              <p className="text-green-600 dark:text-green-400 font-medium">
                Meeting scheduled!
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Invites will be sent to attendees
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label
                  htmlFor="title"
                  className="text-gray-900 dark:text-white"
                >
                  Meeting Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className={`${
                    errors.title ? "border-red-500" : ""
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500`}
                  placeholder="Enter meeting title"
                />
                {errors.title && (
                  <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                    {errors.title}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="name" className="text-gray-900 dark:text-white">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`${
                    errors.title ? "border-red-500" : ""
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500`}
                  placeholder="Enter name"
                />
                {errors.name && (
                  <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="date"
                    className="text-gray-900 dark:text-white"
                  >
                    Date
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className={`${
                      errors.date ? "border-red-500" : ""
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500`}
                  />
                  {errors.date && (
                    <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                      {errors.date}
                    </p>
                  )}
                </div>
                <div>
                  <Label
                    htmlFor="time"
                    className="text-gray-900 dark:text-white"
                  >
                    Time
                  </Label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className={`${
                      errors.time ? "border-red-500" : ""
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500`}
                  />
                  {errors.time && (
                    <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                      {errors.time}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label
                  htmlFor="attendees"
                  className="text-gray-900 dark:text-white"
                >
                  Attendees (emails)
                </Label>
                <Input
                  id="attendees"
                  name="attendees"
                  value={formData.attendees}
                  onChange={handleInputChange}
                  className={`${
                    errors.attendees ? "border-red-500" : ""
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500`}
                  placeholder="email1@example.com, email2@example.com"
                />
                {errors.attendees && (
                  <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                    {errors.attendees}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="description"
                  className="text-gray-900 dark:text-white"
                >
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  rows={3}
                  value={formData.description}
                  onChange={handleInputChange}
                  className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="Enter meeting description"
                />
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setFormData({
                      title: "",
                      name: "",
                      date: "",
                      time: "",
                      attendees: "",
                      description: "",
                    });
                    setErrors({});
                    setIsOpen(false);
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit">Send</Button>
              </div>
            </form>
          )}
        </DialogContent>
      )}
    </Dialog>
  );
};

export default ScheduleMeeting;
