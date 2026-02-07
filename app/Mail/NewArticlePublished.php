<?php

namespace App\Mail;

use App\Models\Newsletter;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class NewArticlePublished extends Mailable
{
    use Queueable, SerializesModels;

    public $newsletter;
    public $unsubscribeToken;

    /**
     * Create a new message instance.
     */
    public function __construct(Newsletter $newsletter, $unsubscribeToken)
    {
        $this->newsletter = $newsletter;
        $this->unsubscribeToken = $unsubscribeToken;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New Article: ' . $this->newsletter->title,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.new-article',
            with: [
                'newsletter' => $this->newsletter,
                'unsubscribeUrl' => route('newsletter.unsubscribe', $this->unsubscribeToken),
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
