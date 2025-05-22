import { useState } from "react";
import { Button } from "/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "/src/components/ui/card";
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
      console.log("Meeting scheduled:", formData);

      const email = "chuxmgbojikwe@gmail.com";
      const subject = encodeURIComponent(
        `"Contact Form Submission from" ${formData.title}`
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
    <>
      {/* Floating action button */}

      <ScheduleButton handleClick={() => setIsOpen(true)} />

      {/* Overlay dialog */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 dark:bg-black/95 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md bg-background dark:bg-background">
            <CardHeader>
              <CardTitle className="text-foreground dark:text-foreground">
                Schedule a Meeting
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <p className="text-green-600 dark:text-green-400 font-medium">
                    Meeting scheduled!
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Invites will be sent to attendees
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label
                      htmlFor="title"
                      className="text-foreground dark:text-foreground"
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
                      } bg-background dark:bg-background text-foreground dark:text-foreground`}
                    />
                    {errors.title && (
                      <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                        {errors.title}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="name"
                      className="text-foreground dark:text-foreground"
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`${
                        errors.name ? "border-red-500" : ""
                      } bg-background dark:bg-background text-foreground dark:text-foreground`}
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
                        className="text-foreground dark:text-foreground"
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
                        } bg-background dark:bg-background text-foreground dark:text-foreground`}
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
                        className="text-foreground dark:text-foreground"
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
                        } bg-background dark:bg-background text-foreground dark:text-foreground`}
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
                      className="text-foreground dark:text-foreground"
                    >
                      Attendees (emails)
                    </Label>
                    <Input
                      id="attendees"
                      name="attendees"
                      placeholder="email1@example.com, email2@example.com"
                      value={formData.attendees}
                      onChange={handleInputChange}
                      className={`${
                        errors.attendees ? "border-red-500" : ""
                      } bg-background dark:bg-background text-foreground dark:text-foreground`}
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
                      className="text-foreground dark:text-foreground"
                    >
                      Description (optional)
                    </Label>
                    <Textarea
                      id="description"
                      name="description"
                      rows={3}
                      value={formData.description}
                      onChange={handleInputChange}
                      className="bg-background dark:bg-background text-foreground dark:text-foreground"
                    />
                  </div>

                  <div className="flex justify-end space-x-2 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setFormData({
                          title: "",
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
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ScheduleMeeting;
