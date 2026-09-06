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
        <DialogContent
          className="
          max-h-[90vh]
          overflow-y-auto
          border
          theme-border
          theme-surface
          bg-zinc-950/100  {/* 1. Explicitly forces an opaque dark background */}
          backdrop-blur-md {/* 2. Diffuses background elements smoothly */}
          theme-primary
          shadow-2xl
          transition-colors
          duration-300
          sm:max-w-[520px]
        "
        >
          <DialogHeader className="border-b theme-border pb-6">
            <p className="text-xs uppercase tracking-[0.3em] theme-muted">
              Start a conversation
            </p>

            <DialogTitle className="mt-3 font-display text-2xl font-medium tracking-tight theme-primary tablet:text-3xl">
              Schedule a meeting
            </DialogTitle>

            <DialogDescription className="mt-2 max-w-md text-sm leading-6 theme-secondary">
              Tell me a little about what you&apos;re working on and when
              you&apos;d like to connect.
            </DialogDescription>
          </DialogHeader>

          {isSubmitted ? (
            <div className="py-12 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border theme-border theme-soft-surface">
                <span className="text-lg theme-primary">✓</span>
              </div>

              <p className="mt-5 font-medium theme-primary">
                Meeting request prepared.
              </p>

              <p className="mt-2 text-sm leading-6 theme-secondary">
                Your email client should open with the meeting details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 pt-2">
              {/* Meeting Title */}
              <div>
                <Label
                  htmlFor="title"
                  className="text-xs uppercase tracking-[0.2em] theme-secondary"
                >
                  Meeting title
                </Label>

                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className={`
                    mt-2
                    theme-input
                    placeholder:text-white/25
                    transition-colors
                    duration-300
                    ${errors.title ? "border-red-500/70" : ""}
                  `}
                  placeholder="e.g. Website redesign"
                />

                {errors.title && (
                  <p className="mt-2 text-xs text-red-400">{errors.title}</p>
                )}
              </div>

              {/* Name */}
              <div>
                <Label
                  htmlFor="name"
                  className="text-xs uppercase tracking-[0.2em] theme-secondary"
                >
                  Your name
                </Label>

                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`
                    mt-2
                    theme-input
                    placeholder:text-white/25
                    transition-colors
                    duration-300
                    ${errors.name ? "border-red-500/70" : ""}
                  `}
                  placeholder="Enter your name"
                />

                {errors.name && (
                  <p className="mt-2 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2">
                <div>
                  <Label
                    htmlFor="date"
                    className="text-xs uppercase tracking-[0.2em] theme-secondary"
                  >
                    Date
                  </Label>

                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className={`
                      mt-2
                      theme-input
                      placeholder:text-white/25
                      transition-colors
                      duration-300
                      ${errors.date ? "border-red-500/70" : ""}
                    `}
                  />

                  {errors.date && (
                    <p className="mt-2 text-xs text-red-400">{errors.date}</p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="time"
                    className="text-xs uppercase tracking-[0.2em] theme-secondary"
                  >
                    Time
                  </Label>

                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className={`
                      mt-2
                      theme-input
                      placeholder:text-white/25
                      transition-colors
                      duration-300
                      ${errors.time ? "border-red-500/70" : ""}
                    `}
                  />

                  {errors.time && (
                    <p className="mt-2 text-xs text-red-400">{errors.time}</p>
                  )}
                </div>
              </div>

              {/* Attendees */}
              <div>
                <Label
                  htmlFor="attendees"
                  className="text-xs uppercase tracking-[0.2em] theme-secondary"
                >
                  Attendee email
                </Label>

                <Input
                  id="attendees"
                  name="attendees"
                  value={formData.attendees}
                  onChange={handleInputChange}
                  className={`
                    mt-2
                    theme-input
                    placeholder:text-white/25
                    transition-colors
                    duration-300
                    ${errors.attendees ? "border-red-500/70" : ""}
                  `}
                  placeholder="you@example.com"
                />

                <p className="mt-2 text-xs theme-muted">
                  Separate multiple email addresses with commas.
                </p>

                {errors.attendees && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.attendees}
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <Label
                  htmlFor="description"
                  className="text-xs uppercase tracking-[0.2em] theme-secondary"
                >
                  Tell me more
                </Label>

                <Textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  className="
                    mt-2
                    resize-none
                    theme-input
                    placeholder:text-white/25
                    transition-colors
                    duration-300
                  "
                  placeholder="What would you like to discuss?"
                />
              </div>

              {/* Actions */}
              <div className="flex flex-col-reverse gap-3 border-t theme-border pt-6 tablet:flex-row tablet:justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCancel}
                  className="
                    theme-button-secondary
                    transition-colors
                    duration-300
                  "
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  className="
                    theme-button-primary
                    transition-colors
                    duration-300
                  "
                >
                  Prepare meeting request →
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      )}
    </Dialog>
  );
};

export default ScheduleMeeting;
