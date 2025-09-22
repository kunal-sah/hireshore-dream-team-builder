/**
 * Accessibility enhancer for third-party widgets
 * Adds missing accessibility attributes to improve SEO and screen reader support
 */

export class AccessibilityEnhancer {
  private observers: MutationObserver[] = [];

  /**
   * Initialize accessibility enhancements for third-party widgets
   */
  public initialize(): void {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.enhanceWidgets());
    } else {
      this.enhanceWidgets();
    }
  }

  /**
   * Enhance chat widget accessibility
   */
  private enhanceWidgets(): void {
    this.enhanceChatWidget();
  }

  /**
   * Add accessibility attributes to chat widget elements
   */
  private enhanceChatWidget(): void {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              
              // Check for chat widget container
              if (element.tagName === 'CHAT-WIDGET' || element.querySelector('chat-widget')) {
                this.processChatWidgetElements(element);
              }
            }
          });
        }
      });
    });

    // Observe document body for chat widget insertion
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    this.observers.push(observer);

    // Also check existing elements in case widget is already loaded
    setTimeout(() => this.processChatWidgetElements(document.body), 1000);
    setTimeout(() => this.processChatWidgetElements(document.body), 3000);
    setTimeout(() => this.processChatWidgetElements(document.body), 5000);
  }

  /**
   * Process chat widget elements and add accessibility attributes
   */
  private processChatWidgetElements(container: Element): void {
    // Process regular DOM elements
    this.processElementsInContainer(container);
    
    // Process shadow DOM elements within chat widgets
    const chatWidgets = container.querySelectorAll('chat-widget');
    chatWidgets.forEach((widget) => {
      if (widget.shadowRoot) {
        this.processElementsInContainer(widget.shadowRoot);
      }
    });
    
    // Also check if the container itself is a chat widget with shadow DOM
    if (container.tagName === 'CHAT-WIDGET' && (container as any).shadowRoot) {
      this.processElementsInContainer((container as any).shadowRoot);
    }
  }

  /**
   * Process elements within a container (regular DOM or shadow DOM)
   */
  private processElementsInContainer(container: Element | DocumentFragment): void {
    // Find chat widget close buttons
    const closeButtons = container.querySelectorAll('.lc_text-widget_prompt--prompt-close');
    closeButtons.forEach((button) => {
      if (!button.getAttribute('aria-label')) {
        button.setAttribute('aria-label', 'Close chat prompt');
        button.setAttribute('title', 'Close chat prompt');
      }
    });

    // Find other potential chat widget buttons without accessible names
    const chatButtons = container.querySelectorAll('button:not([aria-label]):not([aria-labelledby]):not([title])');
    chatButtons.forEach((button) => {
      const buttonElement = button as HTMLButtonElement;
      const buttonText = buttonElement.textContent?.trim();
      
      if (!buttonText) {
        // If it's likely a close button based on common patterns
        if (buttonElement.className.includes('close') || 
            buttonElement.className.includes('lc_text-widget_prompt--prompt-close') ||
            buttonElement.innerHTML.includes('×') ||
            buttonElement.innerHTML.includes('✕')) {
          buttonElement.setAttribute('aria-label', 'Close chat prompt');
          buttonElement.setAttribute('title', 'Close chat prompt');
        } else if (buttonElement.closest('.lc_text-widget') || buttonElement.closest('chat-widget')) {
          // Generic button label for chat widget buttons
          buttonElement.setAttribute('aria-label', 'Chat widget button');
          buttonElement.setAttribute('title', 'Chat widget button');
        }
      }
    });

    // Find chat widget input fields without labels
    const chatInputs = container.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    chatInputs.forEach((input) => {
      const inputElement = input as HTMLInputElement;
      if ((inputElement.type === 'text' || inputElement.type === 'email') && 
          (inputElement.closest('.lc_text-widget') || inputElement.closest('chat-widget'))) {
        inputElement.setAttribute('aria-label', 'Chat message input');
      }
    });
  }

  /**
   * Cleanup observers
   */
  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Create singleton instance
export const accessibilityEnhancer = new AccessibilityEnhancer();