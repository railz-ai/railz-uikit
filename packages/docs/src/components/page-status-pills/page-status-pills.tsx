import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-status-pills',
  styleUrl: 'page-status-pills.scss',
  shadow: true,
})
export class PageStatusPills {
  render() {
    return (
      <div class="container">
        <div class="header">
          <h1>Status Pills</h1>
        </div>

        <div class="content">
          <section>
            <h2>Status Pills</h2>
            <div class="group">
              <railz-status-pill label="Active" status="active" />
              <railz-status-pill label="Inactive" status="inactive" />

              <railz-status-pill label="Connected" status="connected" />
              <railz-status-pill label="Disconnected" status="disconnected" />
            </div>
          </section>
        </div>
      </div>
    );
  }
}
