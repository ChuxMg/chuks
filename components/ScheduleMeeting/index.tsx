import { useState, type ChangeEvent, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import ScheduleButton from "../ScheduleButton/Index";

type FormData = {
  title: string;
  name: string;
  date: string;
  time: string;
  attendees: string;
  description: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  title: "",
  name: "",
  date: "",
  time: "",
  attendees: "",
  description: "",
};

const ScheduleMeeting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
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
      const emails = formData.attendees.split(",").map((email) => email.trim());

      const invalidEmails = emails.filter(
        (email) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      );

      if (invalidEmails.length > 0) {
        newErrors.attendees =
          "Must be valid email addresses separated by commas";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const email = "chuxmgbojikwe@gmail.com";

    const subject = encodeURIComponent(
      `Contact Form Submission from: ${formData.name} - ${formData.title}`,
    );

    const body = encodeURIComponent(
      `${formData.description}\n\nFrom: ${formData.name}\nEmail: ${formData.attendees}\nDate: ${formData.date}\nTime: ${formData.time}`,
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    setIsSubmitted(true);

    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      resetForm();
    }, 5000);
  };

  const handleCancel = () => {
    resetForm();
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <ScheduleButton handleClick={() => setIsOpen(true)} />

      {isOpen && (
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Schedule Meeting</DialogTitle>

            <DialogDescription>
              Schedule a meeting with me. Looking forward to our conversation!
            </DialogDescription>
          </DialogHeader>

          {isSubmitted ? (
            <div className="py-8 text-center">
              <p className="font-medium text-green-600 dark:text-green-400">
                Meeting scheduled!
              </p>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Invites will be sent to attendees
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Meeting Title */}
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
                  } bg-white text-gray-900 placeholder-gray-400 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500`}
                  placeholder="Enter meeting title"
                />

                {errors.title && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                    {errors.title}
                  </p>
                )}
              </div>

              {/* Name */}
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
                    errors.name ? "border-red-500" : ""
                  } bg-white text-gray-900 placeholder-gray-400 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500`}
                  placeholder="Enter name"
                />

                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Date & Time */}
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
                    } bg-white text-gray-900 dark:bg-gray-800 dark:text-white`}
                  />

                  {errors.date && (
                    <p className="mt-1 text-sm text-red-500 dark:text-red-400">
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
                    } bg-white text-gray-900 dark:bg-gray-800 dark:text-white`}
                  />

                  {errors.time && (
                    <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                      {errors.time}
                    </p>
                  )}
                </div>
              </div>

              {/* Attendees */}
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
                  } bg-white text-gray-900 placeholder-gray-400 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500`}
                  placeholder="email1@example.com, email2@example.com"
                />

                {errors.attendees && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                    {errors.attendees}
                  </p>
                )}
              </div>

              {/* Description */}
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
                  className="bg-white text-gray-900 placeholder-gray-400 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                  placeholder="Enter meeting description"
                />
              </div>

              {/* Actions */}
              <div className="flex justify-end space-x-2 pt-4">
                <Button type="button" variant="outline" onClick={handleCancel}>
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
